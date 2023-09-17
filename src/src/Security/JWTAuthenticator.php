<?php

namespace App\Security;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;

class JWTAuthenticator extends AbstractAuthenticator implements AuthenticationEntryPointInterface
{
    private $secretKey;
    private UrlGeneratorInterface $urlGenerator;

    public function __construct($secretKey, UrlGeneratorInterface $urlGenerator)
    {
        $this->secretKey = $secretKey;
        $this->urlGenerator = $urlGenerator;
    }

    public function supports(Request $request): bool
    {
        $hasHeader = $request->cookies->has('token');
        error_log('Authorization Header Present: ' . ($hasHeader ? 'Yes' : 'No'));
        return $hasHeader;
    }


    public function authenticate(Request $request): Passport
    {
        $token = $request->cookies->get('token');
        if ($token) {
            $tokenValue = $request->cookies->get('token');
            error_log('Token_authenticate Value: ' . $tokenValue);
        }
        try {
            error_log('Token Value: ' . print_r($token, true));
            $jwt = JWT::decode($token, new Key($this->secretKey, 'HS256'));
            error_log('JWT Decoded: ' . print_r($jwt, true));

            if (!isset($jwt->data->username)) {
                throw new CustomUserMessageAuthenticationException('JWT ne contient pas de propriété username');
            }

            return new SelfValidatingPassport(new UserBadge($jwt->data->username));

        } catch (\Exception $exception) {
            error_log('Error during authentication: ' . $exception->getMessage());
            throw new CustomUserMessageAuthenticationException('JWT invalide');
        }
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return null;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        return null;
    }

    public function start(Request $request, AuthenticationException $authException = null): Response
    {
        return new RedirectResponse($this->urlGenerator->generate('login'));
    }
}
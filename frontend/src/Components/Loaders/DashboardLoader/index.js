import React from "react"
import ContentLoader from "react-content-loader"

const DashboardLoader = (props) => (
    <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="16" y="15" rx="2" ry="2" width="92%" height="15" />
        <rect x="16" y="40" rx="2" ry="2" width="50%" height="100" />
        <rect x="244" y="40" rx="2" ry="2" width="35%" height="100" />
        <rect x="16" y="150" rx="2" ry="2" width="92%" height="30" />
        <rect x="16" y="190" rx="2" ry="2" width="25%" height="40" />
        <rect x="155" y="190" rx="2" ry="2" width="25%" height="40" />
        <rect x="285" y="190" rx="2" ry="2" width="25%" height="40" />
        <rect x="16" y="240" rx="2" ry="2" width="92%" height="200" />
    </ContentLoader>
)

export default DashboardLoader;


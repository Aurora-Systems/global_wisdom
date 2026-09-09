import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
 remotePatterns:[
        {
            protocol: "https",
            hostname: "ngratesc.sirv.com",
            port: "",
            pathname: "/**"
        },
   {
     protocol:"https",
     hostname:"cdn.clipond.com",
     port:"",
     pathname:"/**"
   }
    ]
  }

};

export default nextConfig;

import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProduction,
  
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = withPWA({
  /* config options here */
  reactStrictMode: true,
});

export default nextConfig;

#!/usr/bin/env node

/**
 * Generate PWA icons from an SVG logo
 * This script creates different sizes of icons needed for PWA
 */

const fs = require('fs');
const path = require('path');

// Create a simple SVG-based icon generator
function generateSVG(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:1" />
      </linearGradient>
    </defs>
    <!-- Background -->
    <rect width="${size}" height="${size}" fill="url(#grad)" rx="${Math.round(size * 0.15)}"/>
    <!-- Icon: Network/IP -->
    <g transform="translate(${size * 0.5}, ${size * 0.5})">
      <!-- Circles representing network nodes -->
      <circle cx="${-size * 0.15}" cy="${-size * 0.15}" r="${size * 0.08}" fill="white" opacity="0.9"/>
      <circle cx="${size * 0.15}" cy="${-size * 0.15}" r="${size * 0.08}" fill="white" opacity="0.9"/>
      <circle cx="${-size * 0.15}" cy="${size * 0.15}" r="${size * 0.08}" fill="white" opacity="0.9"/>
      <circle cx="${size * 0.15}" cy="${size * 0.15}" r="${size * 0.08}" fill="white" opacity="0.9"/>
      <circle cx="0" cy="0" r="${size * 0.1}" fill="white"/>
      <!-- Lines connecting nodes -->
      <line x1="${-size * 0.15}" y1="${-size * 0.15}" x2="0" y2="0" stroke="white" stroke-width="${size * 0.03}" opacity="0.8"/>
      <line x1="${size * 0.15}" y1="${-size * 0.15}" x2="0" y2="0" stroke="white" stroke-width="${size * 0.03}" opacity="0.8"/>
      <line x1="${-size * 0.15}" y1="${size * 0.15}" x2="0" y2="0" stroke="white" stroke-width="${size * 0.03}" opacity="0.8"/>
      <line x1="${size * 0.15}" y1="${size * 0.15}" x2="0" y2="0" stroke="white" stroke-width="${size * 0.03}" opacity="0.8"/>
    </g>
  </svg>`;
}

// Placeholder for now - in production, use sharp or canvas
console.log('To generate PWA icons, please:');
console.log('1. Use an online tool like https://www.pwabuilder.com/');
console.log('2. Or use ImageMagick/Sharp to generate from the SVG');
console.log('3. Place these files in public/:');
console.log('   - pwa-64x64.png');
console.log('   - pwa-192x192.png');
console.log('   - pwa-512x512.png');
console.log('   - maskable-192x192.png');
console.log('   - maskable-512x512.png');
console.log('   - apple-touch-icon.png (180x180)');

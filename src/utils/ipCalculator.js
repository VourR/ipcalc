/**
 * IP Address Calculator Utility
 * Provides functions to calculate subnet information
 */

/**
 * Validate IPv4 address format
 * @param {string} ip - IP address to validate
 * @returns {boolean} - True if valid IPv4 format
 */
export function isValidIPAddress(ip) {
  const ipRegex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  const match = ip.match(ipRegex);
  
  if (!match) return false;
  
  for (let i = 1; i <= 4; i++) {
    const octet = parseInt(match[i], 10);
    if (octet < 0 || octet > 255) return false;
  }
  
  return true;
}

/**
 * Validate CIDR prefix (0-32)
 * @param {number|string} prefix - CIDR prefix to validate
 * @returns {boolean} - True if valid prefix
 */
export function isValidPrefix(prefix) {
  const num = parseInt(prefix, 10);
  return !isNaN(num) && num >= 0 && num <= 32;
}

/**
 * Convert IP address string to 32-bit integer
 * @param {string} ip - IP address string
 * @returns {number} - 32-bit integer representation
 */
function ipToInt(ip) {
  const parts = ip.split('.');
  return (
    (parseInt(parts[0], 10) << 24) +
    (parseInt(parts[1], 10) << 16) +
    (parseInt(parts[2], 10) << 8) +
    parseInt(parts[3], 10)
  );
}

/**
 * Convert 32-bit integer to IP address string
 * @param {number} int - 32-bit integer
 * @returns {string} - IP address string
 */
function intToIp(int) {
  return [
    (int >>> 24) & 255,
    (int >>> 16) & 255,
    (int >>> 8) & 255,
    int & 255
  ].join('.');
}

/**
 * Create netmask from CIDR prefix
 * @param {number} prefix - CIDR prefix
 * @returns {string} - Netmask in dotted decimal notation
 */
export function prefixToNetmask(prefix) {
  const mask = (0xffffffff << (32 - prefix)) >>> 0;
  return intToIp(mask);
}

/**
 * Create wildcard mask (inverse of netmask)
 * @param {string} netmask - Netmask in dotted decimal notation
 * @returns {string} - Wildcard mask
 */
export function getWildcard(netmask) {
  const parts = netmask.split('.');
  return parts
    .map(octet => 255 - parseInt(octet, 10))
    .join('.');
}

/**
 * Calculate subnet information from IP and prefix
 * @param {string} ip - IP address
 * @param {number} prefix - CIDR prefix
 * @returns {object|null} - Subnet information or null if invalid
 */
export function calculateSubnet(ip, prefix) {
  // Validate inputs
  if (!isValidIPAddress(ip)) {
    return { error: 'Invalid IP address format' };
  }
  
  if (!isValidPrefix(prefix)) {
    return { error: 'Invalid prefix (must be 0-32)' };
  }

  const prefixNum = parseInt(prefix, 10);
  const ipInt = ipToInt(ip);
  
  // Create masks
  const maskBits = prefixNum === 0 ? 0 : (0xffffffff << (32 - prefixNum)) >>> 0;
  const wildcardBits = ~maskBits >>> 0;
  
  // Calculate network
  const networkInt = ipInt & maskBits;
  const networkIP = intToIp(networkInt);
  const netmask = intToIp(maskBits);
  const wildcard = intToIp(wildcardBits);
  
  // Calculate broadcast
  const broadcastInt = networkInt | wildcardBits;
  const broadcastIP = intToIp(broadcastInt);
  
  // Calculate usable host range
  let hostMin = networkInt + 1;
  let hostMax = broadcastInt - 1;
  let numHosts = Math.max(0, broadcastInt - networkInt - 1);
  
  // Special case for /31 (point-to-point links)
  if (prefixNum === 31) {
    hostMin = networkInt;
    hostMax = broadcastInt;
    numHosts = 2;
  }
  
  // Special case for /32 (single host)
  if (prefixNum === 32) {
    hostMin = ipInt;
    hostMax = ipInt;
    numHosts = 1;
  }
  
  return {
    ipAddress: ip,
    prefix: prefixNum,
    netmask: netmask,
    wildcard: wildcard,
    network: networkIP,
    broadcast: broadcastIP,
    hostMin: intToIp(hostMin),
    hostMax: intToIp(hostMax),
    hosts: numHosts.toString(),
    totalAddresses: (broadcastInt - networkInt + 1).toString(),
    usableHosts: Math.max(0, numHosts).toString(),
    classType: getIPClass(ip),
    isBroadcast: (ipInt === broadcastInt).toString(),
    isNetwork: (ipInt === networkInt).toString()
  };
}

/**
 * Determine IP address class (A, B, C, D, E)
 * @param {string} ip - IP address
 * @returns {string} - IP class (A, B, C, D, E, or Reserved)
 */
function getIPClass(ip) {
  const firstOctet = parseInt(ip.split('.')[0], 10);
  
  if (firstOctet < 128) return 'A';
  if (firstOctet < 192) return 'B';
  if (firstOctet < 224) return 'C';
  if (firstOctet < 240) return 'D';
  return 'E';
}

/**
 * Check if IP is in private range
 * @param {string} ip - IP address
 * @returns {boolean} - True if private
 */
export function isPrivateIP(ip) {
  const parts = ip.split('.').map(x => parseInt(x, 10));
  
  // 10.0.0.0 - 10.255.255.255
  if (parts[0] === 10) return true;
  
  // 172.16.0.0 - 172.31.255.255
  if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
  
  // 192.168.0.0 - 192.168.255.255
  if (parts[0] === 192 && parts[1] === 168) return true;
  
  return false;
}

/**
 * Convert a date from UTC to a specific timezone
 */
export function convertUtcToTimezone(utcDate: Date, timezone: string): Date {
  if (!utcDate) return utcDate;
  
  // Create a formatter with the target timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });
  
  // Format the date in the target timezone
  const parts = formatter.formatToParts(utcDate);
  
  // Extract the parts
  const year = parseInt(parts.find(part => part.type === 'year')?.value || '0');
  const month = parseInt(parts.find(part => part.type === 'month')?.value || '0') - 1;
  const day = parseInt(parts.find(part => part.type === 'day')?.value || '0');
  const hour = parseInt(parts.find(part => part.type === 'hour')?.value || '0');
  const minute = parseInt(parts.find(part => part.type === 'minute')?.value || '0');
  const second = parseInt(parts.find(part => part.type === 'second')?.value || '0');
  
  // Create a new date in the target timezone
  return new Date(year, month, day, hour, minute, second);
}

/**
 * Convert a date from a specific timezone to UTC
 */
export function convertTimezoneToUtc(tzDate: Date, timezone: string): Date {
  if (!tzDate) return tzDate;
  
  // Get the timezone offset in minutes
  const targetDate = new Date(tzDate);
  
  // Get the target timezone's offset from UTC in minutes
  const targetTzOffset = getTimezoneOffset(timezone, targetDate);
  
  // Adjust the date by the offset to get UTC
  const utcDate = new Date(targetDate.getTime() - targetTzOffset * 60000);
  
  return utcDate;
}

/**
 * Get timezone offset in minutes for a specific timezone and date
 */
export function getTimezoneOffset(timezone: string, date: Date): number {
  // Create a date string in the target timezone
  const dateString = date.toLocaleString('en-US', { timeZone: timezone });
  const targetDate = new Date(dateString);
  
  // Get the difference in minutes between local and target timezone
  const localDate = new Date(date.toLocaleString('en-US'));
  const offsetMinutes = (targetDate.getTime() - localDate.getTime()) / 60000;
  
  return offsetMinutes;
}

/**
 * Get the user's local timezone
 */
export function getUserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e) {
    return 'America/New_York'; // Fallback
  }
}
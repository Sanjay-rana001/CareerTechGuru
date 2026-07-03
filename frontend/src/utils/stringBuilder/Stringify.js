export const parseStringToStringify = (str) => {
  try {
    // Replace all characters that are not letters, numbers, spaces, or hyphens with an empty string
    // Also replace slashes explicitly
    const formattedString = str.replace(/[^a-zA-Z0-9\s-]/g, "");
    // Encode the string for use in a URL
    return encodeURIComponent(formattedString.trim());
  } catch (error) {
    console.error("Error occurred while stringifying:", error.message);
    return null;
  }
};

export const truncateText = (text, maxWords) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= maxWords) {
    return text;
  }
  return words.slice(0, maxWords).join(" ") + "...";
};

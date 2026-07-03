export const filterByLatestPost = (data) => {
    if(!Array.isArray(data)){
        throw new Error('Input data must be an array');
    }

    data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return data.slice(0, 6);
}

export const filterByCategory = (data, category) => {
    // Check if category is provided and data exists
    if (!category || !data || data.length === 0) {
        return [];
    }

    // Filter data based on the provided category
    const filteredData = data.filter(item => item.category === category);

    // Sort by date in descending order (assuming date is in a format that can be compared as strings)
    filteredData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Take the first 6 items
    return filteredData.slice(0, 4);
};

export const filterByLocation = (data, location) => {
    // Check if location is provided and data exists
    if (!location || !data || data.length === 0) {
        return [];
    }

    // Convert location to lowercase for case-insensitive comparison
    const lowerCaseLocation = location.toLowerCase();

    // Filter data based on the provided location
    return data.filter(item => item.jobLocation.toLowerCase().includes(lowerCaseLocation));
};

export const sortDataByDate = (data, dateField) => {
    if (!data || data.length === 0 || !dateField) {
        return [];
    }
    return data.sort((a, b) => new Date(b[dateField]) - new Date(a[dateField]));
}
//#region src/utils/dateFilter/DateFilter.js
var getTimeDifference = (postedOn) => {
	const diffInMilliseconds = /* @__PURE__ */ new Date() - new Date(postedOn);
	const diffInSeconds = Math.floor(diffInMilliseconds / 1e3);
	const diffInMinutes = Math.floor(diffInSeconds / 60);
	const diffInHours = Math.floor(diffInMinutes / 60);
	const diffInDays = Math.floor(diffInHours / 24);
	const diffInWeeks = Math.floor(diffInDays / 7);
	const diffInMonths = Math.floor(diffInDays / 30);
	if (diffInMonths > 0) return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
	else if (diffInWeeks > 0) return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
	else if (diffInDays > 0) return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
	else if (diffInHours > 0) return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
	else if (diffInMinutes > 0) return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
	else return "Just now";
};
var convertTimeIntoDDMMYY = (dateString) => {
	const date = new Date(dateString);
	return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear().toString()}`;
};
var convertTimeIntoMMYYYY = (dateString) => {
	const date = new Date(dateString);
	return `${[
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	][date.getMonth()]} ${date.getFullYear().toString()}`;
};
//#endregion
export { convertTimeIntoMMYYYY as n, getTimeDifference as r, convertTimeIntoDDMMYY as t };

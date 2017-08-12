function centuryFromYear(year) {
    if (year === 0) {
        return year + 1;
    } else if (year % 100 < 1) {
        year = parseInt(year / 100);
        return year;
    } else {
        year = parseInt(year / 100) + 1;
        return year;
    }
}

centuryFromYear(1959);

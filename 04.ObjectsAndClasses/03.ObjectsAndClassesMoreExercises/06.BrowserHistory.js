function solve(searchHistory, array) {
    for (const line of array) {
        const operationInfo = line.split(' ');
        let operation = '';
        let site = '';

        if (operationInfo.includes('Clear')) {
            operation = operationInfo.join(' ');
        } else {
            operation = operationInfo.shift();
            site = operationInfo.join(' ');
        }

        switch (operation) {
            case 'Open':
                openTab(site, line);
                break;
            case 'Close':
                closeTab(site, line);
                break;
            case 'Clear History and Cache':
                clearHistory();
                break;
        }
    }

    console.log(searchHistory['Browser Name']);
    console.log(`Open Tabs: ${searchHistory['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${searchHistory['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${searchHistory['Browser Logs'].join(', ')}`);

    function clearHistory() {
        searchHistory['Open Tabs'] = [];
        searchHistory['Recently Closed'] = [];
        searchHistory['Browser Logs'] = [];
    }

    function closeTab(site, line) {
        const isOpenedSite = searchHistory["Open Tabs"].includes(site);

        if (isOpenedSite) {
            searchHistory['Open Tabs'] = searchHistory['Open Tabs'].filter(openSite => openSite !== site);
            searchHistory['Recently Closed'].push(site);
            searchHistory['Browser Logs'].push(line);
        }
    }

    function openTab(site, line) {
        searchHistory['Open Tabs'].push(site);
        searchHistory['Browser Logs'].push(line);
    }
}

solve({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);

solve({
    "Browser Name": "Mozilla Firefox",

    "Open Tabs": ["YouTube"],

    "Recently Closed": ["Gmail",

        "Dropbox"],

    "Browser Logs": ["Open Gmail",

        "Close Gmail", "Open Dropbox",

        "Open YouTube", "Close Dropbox"]
},

    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);
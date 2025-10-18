const getInstalledApps = () => {
  const storedData = localStorage.getItem("app_installed");

  if(storedData) {
    const storedApp = JSON.parse(storedData);
    return storedApp;
  }
  else {
    return [];
  }
}

const storeInstalledApp = (app) => {
  const currentApp = getInstalledApps();
  
  if (!currentApp.find((item) => item.id === app.id)) {
    currentApp.push({
      id: app.id,
      title: app.title,
      image: app.image,
      downloads: app.downloads,
      companyName: app.companyName,
      description: app.description,
      size: app.size,
      reviews: app.reviews,
      ratingAvg: app.ratingAvg,
      ratings: app.ratings

    });   
    localStorage.setItem("app_installed", JSON.stringify(currentApp));
  }
}


const isInstalled = (id) =>  getInstalledApps().some((app) => app.id === id);


const uninstallApp = (id) => {
  const updatedApp = getInstalledApps().filter((app) => app.id !== id);  
  localStorage.setItem("app_installed", JSON.stringify(updatedApp));
}

export {getInstalledApps, storeInstalledApp, isInstalled, uninstallApp};

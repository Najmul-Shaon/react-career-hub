const getStoredApplication = () => {
  const storageApplication = localStorage.getItem("job-application");
  if (storageApplication) {
    return JSON.parse(storageApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storageApplication = getStoredApplication();
  const exist = storageApplication.find((jobId) => jobId === id);
  if (!exist) {
    storageApplication.push(id);
    localStorage.setItem("job-application", JSON.stringify(storageApplication));
  }
};

export { getStoredApplication, saveJobApplication };

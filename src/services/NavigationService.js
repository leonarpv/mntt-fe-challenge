const getNavigationItems = () => {
  return [
    {
      id: 1,
      name: "Charles",
      lastName: "Darwin",
      birth: "February 12, 1809, The Mount House, Shrewsbury, United Kingdom",
      avatar:
        "https://cdn.pixabay.com/photo/2020/03/12/01/21/charles-darwin-4923636_640.png",
    },
    {
      id: 2,
      name: "Nikola",
      lastName: "Tesla",
      birth: "July 10, 1856, Smiljan, Croatia",
      avatar:
        "https://cdn.pixabay.com/photo/2020/07/24/02/49/person-5432766_1280.png",
    },
    {
      id: 3,
      name: "Albert",
      lastName: "Einstein",
      birth: "March 14, 1879, Ulm, Germany",
      avatar:
        "https://cdn.pixabay.com/photo/2016/01/17/14/23/albert-einstein-1144965_1280.jpg",
    },
  ]
}

export default {
  getNavigationItems,
}

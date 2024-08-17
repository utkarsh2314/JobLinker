import React from "react";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Crafting innovative software solutions tailored to your needs, from development and maintenance to seamless upgrades that guarantee top-tier performance.",
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "Building dynamic and responsive websites with end-to-end solutions, from stunning front-end designs to robust back-end functionality.",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Leveraging advanced analytics to transform complex data into valuable insights, driving smarter decisions with data-driven strategies.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Empowering your business with scalable and efficient cloud solutions that streamline data management, storage, and processing.",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "Accelerating your development pipeline with integrated DevOps practices, enhancing collaboration and speeding up deployments.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Creating seamless mobile experiences with cutting-edge app development for both iOS and Android, tailored to engage and captivate your users.",
    },
  ];

  return (
    <section className="services">
      <h3>Top Niches</h3>
      <div className="grid">
        {services.map((element) => {
          return (
            <div className="card" key={element.id}>
              <h4>{element.service}</h4>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;

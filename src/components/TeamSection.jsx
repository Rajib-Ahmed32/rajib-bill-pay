import teamMembers from "../data/teamMembers";

export default function TeamSection() {
  return (
    <section className="bg-[#eaeaea] flex justify-center dark:bg-gray-900 py-9 md:py-14">
      <div className="px-4 lg:px-0 mx-auto w-full max-w-6xl ">
        <div className="mx-auto space-y-4 max-w-screen-sm text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-[#050521] dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-[#6b7280] sm:text-lg dark:text-gray-400">
            Meet the people building Bangladesh’s smartest mobile banking
            platform.
          </p>
        </div>

        <div className="grid mt-8 gap-8 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="w-full sm:w-full md:w-[200px] md:h-[200px] rounded-lg sm:rounded-none sm:rounded-l-lg object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </a>

              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {member.position}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  {["facebook", "twitter", "github", "linkedin"].map(
                    (platform, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="" />
                          </svg>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

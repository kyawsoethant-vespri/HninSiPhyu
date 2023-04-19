import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  const categories = [
    {
      id: 0,
      name: "Books",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { id: 0, poem: "Poem Books" },
            { id: 1, fiction: "Fiction Books" },
            { id: 2, others: "Others" },
          ],
        },
      ],
    },
  ];
  return (
    <div>
      {categories.map((category) => (
        <div
          className="font-sans text-xs lg:text-lg md:text-sm group hidden lg:inline-block md:inline-block"
          key={category.id}
        >
          <Link to="/" className=" font-semibold">
            {category.name}
          </Link>

          {category.submenu && (
            <div>
              <div className=" absolute top-30 hidden group-hover:block hover:block">
                <div className=" bg-white my-6 px-14 border-solid border-2">
                  {category.sublinks.map((bookSublink) => (
                    <div>
                      <div>
                        {bookSublink.sublink.map((sublinkName) => (
                          <div className=" font-semibold lg:text-sm my-4 text-black hover:text-gray-500">
                            <Link to="/poembooks" className=" hover:underline">
                              {sublinkName.poem}
                            </Link>
                            <Link
                              to="/fictionbooks"
                              className=" hover:underline"
                            >
                              {sublinkName.fiction}
                            </Link>
                            <Link to="/others" className=" hover:underline">
                              {sublinkName.others}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavList;

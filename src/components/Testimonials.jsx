import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section x-data="{ mobileNavOpen: false }" class="overflow-hidden">
        <div class="container mx-auto px-4">
          
          <div class="flex flex-wrap justify-between -m-6 pt-32">
            <div class="w-full lg:w-5/12 xl:w-1/2 p-6">
            <div className="text-center w-full mt-10">
            {/* <div className="absolute z-[-10] w-[70%] h-[15%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[50%] h-[20%] rounded-full bottom-10 white__gradient" />
            <div className="absolute z-[0] w-[40%] h-[30%] right-20 bottom-20 blue__gradient" />
            <div className="absolute z-[0] w-[40%] h-[20%] left-20 bottom-20 blue__gradient" /> */}
            {/* <h1 class="font-heading text-7xl md:text-9xl xl:text-8xl text-black font-bold">Testimonials</h1> */}
          </div>
              <p class="mb-5 font-heading text-gray-400 font-medium text-xl">
                Grow fast, get things done with ease
              </p>
              <h1 class="mb-14 font-heading text-7xl md:text-9xl xl:text-8xl text-black font-bold">
                Meet the team.
              </h1>
              <div class="flex flex-wrap -m-3 mb-20">
                <div class="w-full lg:w-auto p-3">
                  <button class="font-heading w-full px-6 py-4 text-base text-gray-900 bg-white hover:bg-gray-100 rounded-md">
                    Start 14 Days Free Trial
                  </button>
                </div>
                <div class="w-full lg:w-auto p-3">
                  <button class="font-heading w-full px-6 py-4 text-base text-purple-500 bg-transparent border border-gray-500 hover:border-gray-600 rounded-md">
                    How it works
                  </button>
                </div>
              </div>
              <div class="lg:max-w-md">
                <div class="flex flex-wrap -m-3">
                  <div class="w-auto p-3">
                    <img
                      class="w-14 h-14"
                      src="../images/avatar-circle.png"
                      alt=""
                    />
                  </div>
                  <div class="flex-1 p-3">
                    <p class="mb-4 text-gray-300 text-base">
                      “You made it so simple. My new team is so much faster and
                      easier to work with than my old site. I just choose the
                      page, make the change.”
                    </p>
                    <p class="font-heading text-white text-base">
                      Denny Jones, founder of Growthio
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-7/12 xl:w-1/2 p-6">
              <div class="max-w-max mx-auto">
                <div class="flex flex-wrap justify-center -m-3 mb-3">
                  <div class="w-full p-3">
                    <div class="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                      <div class="flex flex-wrap -m-2">
                        <div class="w-auto p-2">
                          <img src="../images/avatar-circle.png" alt="" />
                        </div>
                        <div class="w-auto p-2">
                          <p class="font-heading text-base text-gray-900">
                            Albert Flores
                          </p>
                          <p class="mb-2 text-sm text-gray-500">
                            Software Engineer
                          </p>
                          <div class="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                            <svg
                              class="mr-1"
                              width="13"
                              height="13"
                              viewbox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <p class="text-xs text-gray-700 font-medium">
                              Wyoming, USA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap justify-center max-w-max -m-3 mb-3">
                  <div class="w-full sm:w-1/2 p-3">
                    <div class="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                      <div class="flex flex-wrap -m-2">
                        <div class="w-auto p-2">
                          <img src="../images/avatar-circle.png" alt="" />
                        </div>
                        <div class="w-auto p-2">
                          <p class="font-heading text-base text-gray-900">
                            Darlene Robertson
                          </p>
                          <p class="mb-2 text-sm text-gray-500">
                            Software Tester
                          </p>
                          <div class="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                            <svg
                              class="mr-1"
                              width="13"
                              height="13"
                              viewbox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <p class="text-xs text-gray-700 font-medium">
                              New York, USA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full sm:w-1/2 p-3">
                    <div class="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                      <div class="flex flex-wrap -m-2">
                        <div class="w-auto p-2">
                          <img src="../images/avatar-circle.png" alt="" />
                        </div>
                        <div class="w-auto p-2">
                          <p class="font-heading text-base text-gray-900">
                            Kristin Watson
                          </p>
                          <p class="mb-2 text-sm text-gray-500">
                            Project Manager
                          </p>
                          <div class="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                            <svg
                              class="mr-1"
                              width="13"
                              height="13"
                              viewbox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <p class="text-xs text-gray-700 font-medium">
                              Pennsylvania, USA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap justify-center max-w-max -m-3 mb-3 xl:-ml-20">
                  <div class="w-full sm:w-1/2 p-3">
                    <div class="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                      <div class="flex flex-wrap -m-2">
                        <div class="w-auto p-2">
                          <img src="../images/avatar-circle.png" alt="" />
                        </div>
                        <div class="w-auto p-2">
                          <p class="font-heading text-base text-gray-900">
                            Guy Hawkins
                          </p>
                          <p class="mb-2 text-sm text-gray-500">Scrum Master</p>
                          <div class="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                            <svg
                              class="mr-1"
                              width="13"
                              height="13"
                              viewbox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <p class="text-xs text-gray-700 font-medium">
                              North Carolina, USA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full sm:w-1/2 p-3">
                    <div class="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                      <div class="flex flex-wrap -m-2">
                        <div class="w-auto p-2">
                          <img src="../images/avatar-circle.png" alt="" />
                        </div>
                        <div class="w-auto p-2">
                          <p class="font-heading text-base text-gray-900">
                            Annette Black
                          </p>
                          <p class="mb-2 text-sm text-gray-500">
                            Software Engineer
                          </p>
                          <div class="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                            <svg
                              class="mr-1"
                              width="13"
                              height="13"
                              viewbox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <p class="text-xs text-gray-700 font-medium">
                              North Dakota, USA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap justify-center max-w-max -m-3">
                  <div class="w-full sm:w-1/2 p-3">
                    <div class="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                      <div class="flex flex-wrap -m-2">
                        <div class="w-auto p-2">
                          <img src="../images/avatar-circle.png" alt="" />
                        </div>
                        <div class="w-auto p-2">
                          <p class="font-heading text-base text-gray-900">
                            Robert Fox
                          </p>
                          <p class="mb-2 text-sm text-gray-500">
                            UI/UX Designer
                          </p>
                          <div class="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                            <svg
                              class="mr-1"
                              width="13"
                              height="13"
                              viewbox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <p class="text-xs text-gray-700 font-medium">
                              Maine, USA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full sm:w-1/2 p-3">
                    <div class="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
                      <div class="flex flex-wrap -m-2">
                        <div class="w-auto p-2">
                          <img src="../images/avatar-circle.png" alt="" />
                        </div>
                        <div class="w-auto p-2">
                          <p class="font-heading text-base text-gray-900">
                            Cody Fisher
                          </p>
                          <p class="mb-2 text-sm text-gray-500">
                            Ethical Hacker
                          </p>
                          <div class="flex items-center px-2 py-1 bg-gray-100 rounded-full">
                            <svg
                              class="mr-1"
                              width="13"
                              height="13"
                              viewbox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.56413 9.02246C9.19416 9.39243 8.5298 10.0568 7.91404 10.6726C7.13299 11.4536 5.867 11.4536 5.08595 10.6725C4.4823 10.0689 3.82786 9.41446 3.43587 9.02246C1.7436 7.33019 1.7436 4.58648 3.43587 2.8942C5.12814 1.20193 7.87185 1.20193 9.56413 2.8942C11.2564 4.58648 11.2564 7.33019 9.56413 9.02246Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M8.125 5.95833C8.125 6.8558 7.39746 7.58333 6.5 7.58333C5.60253 7.58333 4.875 6.8558 4.875 5.95833C4.875 5.06087 5.60253 4.33333 6.5 4.33333C7.39746 4.33333 8.125 5.06087 8.125 5.95833Z"
                                stroke="#71717A"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <p class="text-xs text-gray-700 font-medium">
                              Alaska, USA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

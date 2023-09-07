import { CheckIcon } from "@heroicons/react/outline";

function Product() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="my-24 w-full text-white">
        <div className="absolute h-[800px] w-full bg-slate-900 mix-blend-overlay"></div>

        <div className="mx-auto max-w-[1240px] py-12">
          <div className="py-8 text-center text-slate-300">
            <h3 className="py-8 text-5xl font-bold text-[#87CC17]">Bootcamp</h3>
            <p className="text-3xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
              voluptatum iste.
            </p>
          </div>

          <div className="grid md:grid-cols-3">
            {/* Start Table */}
            <div className="relative m-4 rounded-xl bg-white p-8 text-slate-900 shadow-2xl">
              <span className="rounded-2xl bg-[#87CC17] px-3 py-1 text-sm uppercase text-white">
                Level 0 - Starter
              </span>
              <div className="text-xl">
                <p className="flex py-4">
                  <CheckIcon className="mr-5 w-8 text-green-600" />
                  Zoom Intro.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="mr-5 w-8 text-green-600" />2 Course
                  Udemy
                </p>
              </div>
              <button className="buttonBanner my-4 bg-[#6951FF] py-4 text-white">
                View
              </button>
            </div>
            {/* End Table */}

            {/* Start */}
            <div className="relative m-4 rounded-xl bg-white p-8 text-slate-900 shadow-2xl">
              <span className="rounded-2xl bg-[#87CC17] px-3 py-1 text-sm uppercase text-white">
                Level 1 - Full Course
              </span>
              <div className="text-xl">
                <p className="flex py-4">
                  <CheckIcon className="mr-5 w-8 text-green-600" />
                  Zoom Intro.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="mr-5 w-8 text-green-600" />
                  Full Course Udemy
                </p>
                <p className="flex py-4">
                  <CheckIcon className="mr-5 w-8 text-green-600" />
                  Komunitas
                </p>
              </div>
              <button className="buttonBanner my-4 bg-[#6951FF] py-4 text-white">
                View
              </button>
            </div>
            {/* End Table */}

            {/* Start */}
            <div className="relative m-4 rounded-xl bg-white p-8 text-slate-900 shadow-2xl">
              <span className="rounded-2xl bg-[#87CC17] px-3 py-1 text-sm uppercase text-white">
                Level 2 - Full Mentoring
              </span>
              <div className="text-xl">
                <p className="flex py-4">
                  <CheckIcon className="mr-5 w-8 text-green-600" />
                  Zoom Intro.
                </p>
                <p className="flex py-4">
                  <CheckIcon className="mr-5 w-8 text-green-600" />
                  Full Course Udemy
                </p>
                <p className="flex py-4">
                  <CheckIcon className="mr-5 w-8 text-green-600" />
                  Komunitas
                </p>
                <p className="flex py-4">
                  <CheckIcon className="mr-5 w-8 text-green-600" />
                  Mentoring Zoom
                </p>
              </div>
              <button className="buttonBanner my-4 bg-[#6951FF] py-4 text-white">
                View
              </button>
            </div>
            {/* End Table */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

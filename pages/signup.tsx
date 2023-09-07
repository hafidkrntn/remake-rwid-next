import Head from "next/head";

function Login() {
  return (
    <div>
        <Head>
        <title>Login - Remote Worker Indonesia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src="https://res.cloudinary.com/hafidkrntn/image/upload/v1664882363/rwid/image_2_wo7dq8.png"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
    <div className="relative flex h-screen w-screen flex-col space-y-6 my-40 md:items-center md:justify-center md:bg-transparent">
      <h1 className="text-extrabold text-6xl">Sign in</h1>
      <p>Fill the form to sign in your account</p>
      <form className="relative mt-24 space-y-8 rounded py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <div className="space-y-6 px-6 text-xl">
          <label className="inline-block w-full">
            <p className="text-md my-2">Full Name</p>
            <input
              type="name"
              placeholder="Name"
              className="rounded border-2 border-transparent hover:border-green-500"
            />
          </label>
          <label className="inline-block w-full">
            <p className="text-md my-2">Email</p>
            <input
              type="email"
              placeholder="Email"
              className="rounded border-2 border-transparent hover:border-green-500"
              />
          </label>
          <label className="inline-block w-full">
            <p className="text-md my-2">Password</p>
            <input
              type="password"
              placeholder="Password"
              className="rounded border-2 border-transparent hover:border-green-500"
            />
          </label>
          <label className="inline-block w-full">
            <p className="text-md my-2">Confirm Password</p>
            <input
              type="password"
              placeholder="Password"
              className="rounded border-2 border-transparent hover:border-green-500"
              />
          </label>
        </div>

        <button
          className="w-full rounded-full bg-[#1E40AF] py-3 font-semibold text-white"
          type="submit"
          >
          Sign In
        </button>
        <p className="border-b-2" />
        <button
          className="flex w-full rounded-full bg-[#1E40AF] py-3 font-semibold text-white"
          type="submit"
        >
          <img
            src="https://cloudinary-res.cloudinary.com/image/upload/v1645708175/sign_up/cdnlogo.com_google-icon.svg"
            width={30}
            height={30}
            className="mx-8 cursor-pointer object-contain"
            />
          <p className="my-1">Sign In with google</p>
        </button>
        <div className="mx-8 text-[gray]">
          Already have account?{" "}
          <button className="text-blue-500 hover:underline" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;

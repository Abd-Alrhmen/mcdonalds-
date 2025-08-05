import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="container p-4 max-w-[700px] mx-auto mt-10 bg-white shadow-md rounded-lg">
      <Helmet>
        <title>Contact Us - Happy Meal</title>
        <meta name="description" content="Get in touch with Happy Meal for inquiries, feedback, or support. We're here to help!" />
        <meta name="keywords" content="Happy Meal, Contact, McDonald's, Support, Feedback" />
      </Helmet>

      <h2 className="text-center font-bold text-2xl mb-6 text-red-600">Contact Us</h2>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: "Name is required",
            })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Your message here"
            {...register("message", { required: "Message Cannot be empty" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-red-500 px-4 py-2 text-white rounded cursor-pointer hover:bg-red-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

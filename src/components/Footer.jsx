const Footer = () => {
  return (
    <div className="mt-24">
      <p className="m-20 text-center text-gray-700 dark:text-gray-200">
        © {new Date().getFullYear()} All rights reserved by{" "}
        <a
          href="http://delasimensah.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Delasi Mensah
        </a>
      </p>
    </div>
  );
};

export default Footer;

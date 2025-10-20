const CtaComponent = () => {
  return (
    <div className="p-4">
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary text-primary-foreground py-16 px-6 text-center rounded-2xl shadow-lg max-w-5xl mx-auto my-12">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 opacity-10">
          {/* Dotted pattern */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_)] bg-[size:20px_20px]" />
          {/* Circle overlay */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-foreground  " />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground" />
        </div>

        {/* CTA content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Get high-quality printing and branding solutions delivered fast
            designed to make your business stand out.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-full hover:bg-orange-100 transition duration-300"
            >
              Get a Quote
            </a>
            <a
              href="/services"
              className="border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-700 transition duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CtaComponent;

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-padding bg-[#E8E7D2]">
      <div className="inner-container py-8">
        <div>
          <div className="border-mineral-900/10 border-t">
            <p className="text-mineral-900 text-md">
              &copy; Biotopia {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

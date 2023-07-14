import React from "react";

function Footer() {
  return (
    <footer className="mt-[50px] bg-[#137E86] p-[30px] rounded" style={{"color": "#ffff9a"} } >
      <div className="page-width">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h2>About Us</h2>
            <p>Lalscorp: Sparking creativity and imagination with our diverse range of quality toys for children of all ages.</p>
          </div>
          <div>
            <h2>Links</h2>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2>Stay Connected</h2>
            <p>Follow us on social media.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

export const layout = {
  areaId: "content",
  sortOrder: 100,
};

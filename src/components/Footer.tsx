import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">Hero Industries</h3>
            <p className="text-sm opacity-90 mb-4">
              Government Contract Product and Service Provider
            </p>
            <p className="text-sm opacity-90">
              Serving local and federal government agencies nationwide, with a strong presence in Florida.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">4032 Pinewood Lane, Weston, FL 33331, United States</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:888-805-1733" className="text-sm hover:underline">888-805-1733</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:office@heroindustries.us" className="text-sm hover:underline">
                  office@heroindustries.us
                </a>
              </div>
            </div>
          </div>

          {/* GovCon Identifiers */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Government Identifiers</h4>
            <div className="space-y-2 text-sm">
              <p><strong>CAGE Code:</strong> 9FZU3</p>
              <p><strong>SAM UEI:</strong> VMVHE3LAXNZ6</p>
              <p><strong>DUNS:</strong> 044365124</p>
              <p className="mt-4 font-semibold text-accent">MBE Certified</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>© COPYRIGHT 2024, ALL RIGHTS RESERVED - HERO INDUSTRIES</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

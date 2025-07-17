import HeaderPages from "../components/HeaderPages";
import ServiceInit from "../components/ServiceInit";
import ServicesGridSec from "../components/ServicesGridSec";

export default function Services() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <HeaderPages/>
      <ServiceInit/>
      <ServicesGridSec/>
    </div>
  );
} 


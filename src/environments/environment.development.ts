interface EmailJS {
    serviceId: string;
    templateId: string;
    publicKey: string;
  }
  
  interface Environment {
    emailjs: EmailJS;
  }
  
  export const environment: Environment = {
      emailjs: {
        publicKey: '2lp8WBO6lmzfVvgK5',
        serviceId: 'service_6cwdrjh',
        templateId: 'template_hpd527e'
      }
    };
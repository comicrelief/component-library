const shareTracking = channel => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  window.dataLayer.push({
      event: 'btn_social-share',
      action: channel
  });
};

export default shareTracking;

const shareTracking = channel => {
  const dataLayer = window.dataLayer || [];

  dataLayer.push({
    event: 'btn_social-share',
    action: channel
  });
};

export default shareTracking;

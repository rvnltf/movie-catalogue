const NotificationHelper = {
  sendNotification({ title, options }) {
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser!');
      return;
    }

    if (!this._checkPermission()) {
      console.log('User did not yet granted permission!');
      this._requestPermission();
      return;
    }

    this._showNotification({ title, options });
  },

  _checkAvailability() {
    return !!('Notification' in window);
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.log('Notification denied!');
    }

    if (status === 'default') {
      console.log('Permission closes!');
    }
  },

  async _showNotification({ title, options }) {
    const serviceoWorkerRegistration = await navigator.serviceWorker.ready;
    serviceoWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;

self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
});

self.addEventListener('push', (event) => {
    const options = {
        body: 'هذا هو إشعارك.',
        icon: 'https://placehold.co/100x100?text=Notification+Icon&bg=blue&fg=white',
        tag: 'instant-notification'
    };
    
    event.waitUntil(
        self.registration.showNotification('إشعار جديد', options)
    );
});
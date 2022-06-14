export const onRouteUpdate = () => {
	navigator.serviceWorker.register('/sw.js').then((reg) => {
		reg.update()
	})
}

export const onServiceWorkerUpdateReady = () => {
	window.location.reload(true)
}

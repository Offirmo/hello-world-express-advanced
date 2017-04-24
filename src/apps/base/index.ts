import * as express from 'express'
import { ServerLogger, serverLoggerToConsole } from '@offirmo/loggers-types-and-stubs'


interface InjectableDependencies {
	logger: ServerLogger
}

const defaultDependencies: InjectableDependencies = {
	logger: serverLoggerToConsole,
}

async function factory(dependencies: Partial<InjectableDependencies> = {}) {
	const { logger } = Object.assign({}, defaultDependencies, dependencies)
	logger.debug('Initializing the base webapp…')

	const app = express.Router()

	app.get('/', (req, res) => {
		res.send('This is not what you are looking for. Maybe you should check the instructions ?')
	})

	return app
}

export {
	InjectableDependencies,
	factory,
}

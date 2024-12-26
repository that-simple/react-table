import { UseTableReturnValue } from "../hooks/useTable.types";

export type MiddlewareFunction = (props: UseTableReturnValue) => UseTableReturnValue;

class Middleware {
    public static middlewares: MiddlewareFunction[] = [];

    public static addMiddlewareToRegistry(middleware: MiddlewareFunction) {
        Middleware.middlewares.push(middleware)
    }

    public static runMiddlewares(props: UseTableReturnValue) {
        let result = props
        for (let i = 0; i < Middleware.middlewares.length; i++) {
            result = Middleware.middlewares[i](result);
        }

        return result;
    }
}

export const registerMiddleware = (middleware: MiddlewareFunction) => Middleware.addMiddlewareToRegistry(middleware);
export const runMiddlewares = (returnValue: UseTableReturnValue) => Middleware.runMiddlewares(returnValue);

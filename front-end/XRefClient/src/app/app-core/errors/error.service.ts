export abstract class ErrorService {
    abstract handleError(error: Error): void;
}
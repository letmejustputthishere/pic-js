import { IDL } from '@dfinity/candid';
import { Actor } from '@hadronous/pic';
import { _SERVICE } from '../../declarations/todo.did';

export declare const idlFactory: IDL.InterfaceFactory;

export declare type TodoService = _SERVICE;
export declare type TodoActor = Actor<TodoService>;

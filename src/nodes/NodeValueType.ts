import {Vector2, Vector3, Vector4} from 'three';

export enum NodeValueType {
    Number = 0,
    Vec2 = 1,
    Vec3 = 2,
    Vec4 = 3,
    Boolean = 4,
    AnyType = 5,
    NullableAnyType = 6,
    EventStream = 7,
}

export const getAlignOfNodeValueType = (type: NodeValueType): number => {
    switch (type) {
        case NodeValueType.Boolean:
            return 4;
        case NodeValueType.Number:
            return 4;
        case NodeValueType.Vec2:
            return 8;
        case NodeValueType.Vec3:
            return 16;
        case NodeValueType.Vec4:
            return 16;
        case NodeValueType.AnyType:
            return 0;
        case NodeValueType.NullableAnyType:
            return 0;
        default:
            return 0;
    }
};

export const getSizeOfNodeValueType = (type: NodeValueType): number => {
    switch (type) {
        case NodeValueType.Boolean:
            return 1;
        case NodeValueType.Number:
            return 4;
        case NodeValueType.Vec2:
            return 8;
        case NodeValueType.Vec3:
            return 12;
        case NodeValueType.Vec4:
            return 16;
        case NodeValueType.AnyType:
            return 0;
        case NodeValueType.NullableAnyType:
            return 0;
        default:
            return 0;
    }
};

export const genDefaultForNodeValueType = (type: NodeValueType): any => {
    switch (type) {
        case NodeValueType.Boolean:
            return false;
        case NodeValueType.Number:
            return 0;
        case NodeValueType.Vec2:
            return new Vector2();
        case NodeValueType.Vec3:
            return new Vector3();
        case NodeValueType.Vec4:
            return new Vector4();
        case NodeValueType.AnyType:
            return 0;
        case NodeValueType.NullableAnyType:
            return undefined;
    }
};

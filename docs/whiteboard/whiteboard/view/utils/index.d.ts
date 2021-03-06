import { LineData, EllipseData, RectData, PathData, ProtoGraphic, ViewTool } from '../entities/viewEntity';
import { CalStandard } from '../entities/entity';
declare const createGraphicId: () => string;
declare const setAttributeHandle: (el: Element, attrDataList: {
    attr: string;
    value: any;
}[]) => void;
declare const createSvgElementHandle: (svgDomId: string, graphicDomId: string, tagName: string) => (SVGSVGElement | SVGElement)[];
declare const transPathByPointList: (pointList: number[]) => string;
declare const transRgbTo16: (colorRgba: string) => string;
declare const checkColor: (color: string) => boolean;
declare const checkBrushSize: (thin: number) => boolean;
declare const checkTextSize: (thin: number) => boolean;
declare const simplifyPathData: (pointList: number[]) => number[];
declare const mapGraphicsData: (tagName: string, data: number[]) => LineData | EllipseData | RectData | PathData | boolean;
declare const transGraphicsData: (graphicList: ProtoGraphic[], action: number, action_type: number, viewportWidth: number, calStandard: CalStandard) => ProtoGraphic[];
declare const transColor: (protoGraphic: ProtoGraphic, reverse: boolean) => void;
declare const transData: (protoGraphic: ProtoGraphic, reverse: boolean) => void;
declare const calSizeHandle: (size: number, type: ViewTool, viewportWidth: number, calStandard: CalStandard, reverse: boolean) => number;
declare const calPlaceHandle: (protoGraphic: ProtoGraphic, viewWidth: number, calStandard: CalStandard, reverse: boolean) => void;
declare const bindStopsEvents: (dom: Element, eventList: string[]) => void;
declare const splitTextHandle: (data: string) => {
    beginX: string;
    beginY: string;
    text: string;
};
declare const addTextBeginPlace: (data: string, beginX: string, beginY: string) => string;
export { createGraphicId, setAttributeHandle, createSvgElementHandle, transPathByPointList, transRgbTo16, simplifyPathData, mapGraphicsData, transGraphicsData, bindStopsEvents, transColor, transData, calPlaceHandle, calSizeHandle, splitTextHandle, addTextBeginPlace, checkColor, checkBrushSize, checkTextSize, };

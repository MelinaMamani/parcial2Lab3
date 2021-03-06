var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var general;
(function (general) {
    var Camioneta = /** @class */ (function (_super) {
        __extends(Camioneta, _super);
        function Camioneta(id, marca, modelo, precio, cuatro) {
            var _this = _super.call(this, id, marca, modelo, precio) || this;
            _this.cuatroXcuatro = cuatro || false;
            return _this;
        }
        Camioneta.prototype.getCuatro = function () {
            return this.cuatroXcuatro;
        };
        Camioneta.prototype.setCuatro = function (cuatrox4) {
            this.cuatroXcuatro = cuatrox4;
        };
        return Camioneta;
    }(Vehiculo));
    general.Camioneta = Camioneta;
})(general || (general = {}));

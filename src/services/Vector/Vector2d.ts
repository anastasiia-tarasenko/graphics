class Vector2d {
  private _x: number
  private _y: number

  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  public get x(): number {
    return this._x
  }

  public set x(v: number) {
    this._x = v
  }

  public get y(): number {
    return this._y
  }

  public set y(v: number) {
    this._y = v
  }

  neg = () => new Vector2d(-this._x, -this._y)
  add = (v: Vector2d) => new Vector2d(this._x + v._x, this._y + v._y)
  sub = (v: Vector2d) => this.add(v.neg())
  mul = (v: Vector2d) => this._x * v._x + this._y * v._y
  abs = () => Math.sqrt(this._x * this._x + this._y * this._y)
  ang = () => Math.atan(this._y / this._x)
}

export default Vector2d

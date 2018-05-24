import { FigureModule } from './figure.module';

describe('FigureModule', () => {
  let figureModule: FigureModule;

  beforeEach(() => {
    figureModule = new FigureModule();
  });

  it('should create an instance', () => {
    expect(figureModule).toBeTruthy();
  });
});

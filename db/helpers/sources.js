const sourceModel = require('../../models/source-model');

class Sources {
  async getSourceNames() {
    const sources = await sourceModel.find();
    const names = sources.map(source => source.name);

    return names;
  }

  async createSourcePacks() {
    const sources = await this.getSourceNames();

    const one = sources.splice(0, 20);
    const two = sources.splice(0, 20);
    const three = sources.splice(0, 20);
    const four = sources.splice(0, 20);
    const five = sources.splice(0, 20);
    const six = sources.splice(0, 20);
    const seven = sources.splice(0, sources.length);

    const all = [one, two, three, four, five, six, seven];

    return all;
  }
}

module.exports = Sources;

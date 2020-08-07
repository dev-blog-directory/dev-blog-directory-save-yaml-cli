'use strict';

const fs = require('fs-extra');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;
const main = require('dev-blog-directory-save-yaml-cli');
const { YAMLException } = require('node-read-yaml');

describe('dev-blog-directory-save-yaml-cli', () => {
  before(() => {
    return fs
      .remove('./documents')
      .then(() => {
        console.log('remove ./documents success!');
      })
      .catch((error) => {
        console.error(error);
      });
  });

  it('module should to be a function', () => {
    expect(main).to.be.a('function');
  });

  it('should throw an error', () => {
    return expect(main()).to.be.rejected;
  });

  it('should throw a YAMLException', () => {
    return expect(main('test.js')).to.be.rejectedWith(YAMLException);
  });

  it('should save a blog', () => {
    return expect(main('new.yml')).to.be.fulfilled;
  });

  it('duplicated url', () => {
    return expect(main('new.yml')).to.be.rejectedWith('Duplicated url');
  });

  it('with merge option', () => {
    return expect(main('new.yml', false, { merge: true })).to.be.fulfilled;
  });
});

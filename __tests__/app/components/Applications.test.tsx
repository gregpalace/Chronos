import React from 'react';
import { mount } from 'enzyme';
import { createMount, createShallow } from '@material-ui/core/test-utils';

import Applications from '../../../app/components/Applications';
import { DashboardContext } from '../../../app/context/DashboardContext';
import { create } from 'ts-node';

describe('React unit tests', () => {
  describe('<Application/>', () => {
    let wrapper: any;
    let mount: any;
    let shallow: any;

    beforeAll(() => {
      const applications: any = [];
      const getApplications: any = jest.fn();
      mount = createMount();
      shallow = createShallow();

      const mockApp = (
        <DashboardContext.Provider value={{ applications, getApplications }}>
          <Applications />
        </DashboardContext.Provider>
      );
      wrapper = shallow(mockApp);
    });

    afterAll(() => {
      mount.cleanUp();
    });

    it('should contain a modal', () => {
      expect(wrapper.length).toBe(1);
    });
  });
});
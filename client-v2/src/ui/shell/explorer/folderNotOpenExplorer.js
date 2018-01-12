//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
//
// Microsoft Bot Framework: http://botframework.com
//
// Bot Framework Emulator Github:
// https://github.com/Microsoft/BotFramwork-Emulator
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

import { connect } from 'react-redux';
import { css } from 'glamor';
import React from 'react';

import * as AssetExplorerActions from '../../../data/action/assetExplorerActions';
import ExpandCollapse, { Controls as ExpandCollapseControls, Content as ExpandCollapseContent } from '../../layout/expandCollapse';
import * as Colors from '../../colors/colors';

const CSS = css({
    backgroundColor: Colors.EXPLORER_BACKGROUND_DARK,
    color: Colors.EXPLORER_FOREGROUND_DARK,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    listStyleType: 'none',
    margin: 0,
    padding: 0,

    '& .folder-empty-state': {
        padding: '4px 24px',
        fontFamily: '\'Segoe UI\', \'Helvetica Neue\', \'Arial\', \'sans-serif\''
    }
});

const BOTS_CSS = css({
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none',
    margin: 0,
    padding: 0
});

class FolderNotOpenExplorer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleOpenFolderClick = this.handleOpenFolderClick.bind(this);
    }

    handleOpenFolderClick(e) {
        this.props.dispatch(AssetExplorerActions.promptOpenFolder());
    }

    render() {
        return (
            <ul className={ CSS }>
                <li>
                    <ExpandCollapse
                        initialExpanded={ true }
                        title="No Folder Opened"
                    >
                        <ExpandCollapseContent>
                            <div className="folder-empty-state">
                                <div>You have not yet opened a folder.</div>
                                <button onClick={ this.handleOpenFolderClick }>Open Folder</button>
                            </div>
                        </ExpandCollapseContent>
                    </ExpandCollapse>
                </li>
            </ul>
        );
    }
}

export default connect(state => ({}))(FolderNotOpenExplorer)

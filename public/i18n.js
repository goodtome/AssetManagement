// Lightweight i18n utility for DumbAssets
(function(){
  const translations = {
    en: {
      'app.title': (window.SITE_TITLE || 'DumbAssets'),
      'demo.mode': '🧪 DEMO MODE (limited functionality)',
      'home.aria': 'Go to Dashboard',
      'settings.aria': 'Settings',
      'theme.aria': 'Toggle theme',
      'search.placeholder': 'Search assets...',
      'button.addAsset': 'Add Asset',
      'button.importAssets': 'Import Assets',
      'sub.addComponent': '+ Add Component',
      'maintenance.addEvent': 'Add Maintenance Event',
      'file.photos.hint': 'Drag & drop or click to upload photos',
      'file.receipts.hint': 'Drag & drop or click to upload receipts',
      'file.manuals.hint': 'Drag & drop or click to upload manuals',
      'action.save': 'Save',
      'action.cancel': 'Cancel',
      'import.title': 'Import Assets',
      'settings.legend.events': 'Notification Events',
      'import.downloadTemplate': 'Download Template',
      'import.startImport': 'Start Import',
      'settings.title': 'Settings',
      'tab.notifications': 'Notifications',
      'tab.interface': 'Interface',
      'tab.system': 'System',
      'pin.enter': 'Enter PIN',
      'pin.incorrect': 'Incorrect PIN. Please try again.',
      'credit.builtBy': 'Built by',
      'addAsset.title': 'Add Asset',
      'editAsset.title': 'Edit Asset',
      'asset.name': 'Name *',
      'asset.manufacturer': 'Manufacturer',
      'asset.model': 'Model Number',
      'asset.serial': 'Serial Number',
      'asset.purchaseDate': 'Purchase Date',
      'asset.price': 'Price',
      'asset.quantity': 'Quantity',
      'asset.warrantyScope': 'Warranty Scope',
      'asset.warrantyExpiration': 'Warranty Expiration',
      'asset.lifetime': 'Lifetime',
      'asset.link': 'Link',
      'asset.tags': 'Tags',
      'asset.notes': 'Notes',
      'maintenance.title': 'Maintenance Events',
      'file.attachments': 'File Attachments',
      'file.photo': 'Photo',
      'file.receipt': 'Receipt',
      'file.manual': 'Manual',
      'import.acceptedTypes': 'Accepted types: .csv, .xls, .xlsx',
      'mapping.name': 'Name:',
      'mapping.manufacturer': 'Manufacturer:',
      'mapping.model': 'Model:',
      'mapping.serial': 'Serial:',
      'mapping.purchaseDate': 'Purchase Date:',
      'mapping.purchasePrice': 'Purchase Price:',
      'mapping.quantity': 'Quantity:',
      'mapping.notes': 'Notes:',
      'mapping.url': 'URL:',
      'mapping.warranty': 'Warranty:',
      'mapping.warrantyExpiration': 'Warranty Expiration:',
      'mapping.lifetime': 'Lifetime:',
      'mapping.secondaryWarranty': '2nd Warranty Scope:',
      'mapping.secondaryWarrantyExpiration': '2nd Warranty Expiration:',
      'mapping.tags': 'Tags:'
      ,
      'warranty.addSecondary': 'Add Secondary Warranty',
      'warranty.removeSecondary': 'Remove Secondary Warranty',
      'error.nameRequired': 'Name is required. Please try again.',
      'error.parentIdRequired': 'Parent ID is required. Please try again.',
      'import.mapName': 'Please map the Name column',
      'import.rowNameRequired': 'Row {row}: Name is required.',
      'import.invalidDate': "Row {row}: Invalid date in column '{col}' ({val})",
      'empty.noAssets': 'No assets found. Add your first asset to get started.',
      'tags.placeholder': 'Add tags (press enter or comma to add)',
      'settings.legend.reorder': 'Reorder Sections',
      'settings.reorder.hint': 'Drag and drop to reorder dashboard sections:',
      'dashboard.section.analytics': 'Analytics',
      'dashboard.section.totals': 'Totals',
      'dashboard.section.warranties': 'Warranties',
      'dashboard.section.events': 'Events',
      'dashboard.legend.warrantyMaintenance': 'Warranty Expirations & Maintenance',
      'toggle.showAnalytics': 'Show Analytics',
      'toggle.showTotals': 'Show Totals',
      'toggle.showWarranties': 'Show Warranties',
      'toggle.showEvents': 'Show Events',
      'card.totalAssets': 'Total Assets',
      'card.totalComponents': 'Total Components',
      'card.totalValue': 'Total Value',
      'card.warrantiesTotal': 'Warranties Total',
      'card.warrantiesWithin60': 'Warranties In 60',
      'card.warrantiesWithin30': 'Warranties In 30',
      'card.warrantiesExpired': 'Warranties Expired',
      'card.warrantiesActive': 'Warranties Active',
      'dashboard.analytics.warrantiesOverTime': 'Warranties Expiring Over Time',
      'dashboard.analytics.warrantyStatus': 'Warranty Status',
      'dashboard.analytics.upcomingMaintenanceEvents': 'Upcoming Maintenance Events',
      'asset.overview': 'Asset Overview',
      'notify.assetAdded': 'Asset Added',
      'notify.assetDeleted': 'Asset Deleted',
      'notify.assetEdited': 'Asset Edited',
      'notify.1month': '1 Month',
      'notify.2weeks': '2 Weeks',
      'notify.1week': '1 Week',
      'notify.3days': '3 Days',
      'notify.maintenance': 'Maintenance'
      ,
      'maintenance.recurring': 'Recurring',
      'maintenance.oneTime': 'One-time',
      'maintenance.eventLabel': 'Event:',
      'maintenance.notesLabel': 'Notes:',
      'maintenance.schedule': 'Maintenance Schedule',
      'label.description': 'Description',
      'meta.added': 'Added',
      'meta.updated': 'Updated',
      'file.unknown': 'Unknown File',
      'asset.unnamed': 'Unnamed Asset',
      'asset.totalValue': 'Total Value'
      ,
      'file.uploadSummary': '{valid} valid {type} added. {invalid} file(s) were invalid or duplicate and were skipped.',
      'file.invalidAll': 'Invalid file type. Please upload a supported file.',
      'file.invalidMultiple': 'Invalid file type(s) or duplicate files. Please upload supported, non-duplicate files.',
      'file.onlyOneAllowed': 'Only one file allowed. The first valid file was selected.',
      'select.column': 'Select Column',
      'import.invalidType': 'Invalid file type. Please select a {types} file.',
      'components.legend': 'Components',
      'add.subcomponent': '+ Add Sub-Component',
      'editComponent.title': 'Edit Component',
      'empty.noComponents': 'No components found. Add your first component.',
      'tags.placeholder': 'Add tags (press enter or comma to add)',
      'date.specific': 'Specific Date',
      'error.generic': 'An error occurred. Please try again.',
      'asset.warrantyLabel': 'Warranty',
      'asset.secondaryWarrantyLabel': 'Secondary Warranty'
      ,
      'action.deleteImage': 'Delete Image',
      'action.deleteDocument': 'Delete {type}',
      'confirm.deleteFile': 'Are you sure you want to delete this {type}?',
      'file.document': 'Document'
      ,
      'asset.added': 'Asset added successfully!',
      'asset.updated': 'Asset updated successfully!',
      'asset.deleted': 'Asset deleted successfully!',
      'component.added': 'Component added successfully!',
      'component.updated': 'Component updated successfully!',
      'component.deleted': 'Component deleted successfully!',
      'confirm.deleteAsset': 'Are you sure you want to delete this asset? This will also delete all its components.',
      'confirm.deleteComponent': 'Are you sure you want to delete this component? This will also delete any sub-components.',
      'asset.linkCopied': 'Asset link copied to clipboard!',
      'asset.copyFailed': 'Failed to copy link to clipboard. Please try again.',
      'import.success': 'Successfully imported {count} assets',
      'settings.saved': 'Settings saved',
      'notifications.testSent': 'Test notifications sent successfully!',
      'export.success': 'Data exported successfully!',
      'export.simpleSuccess': 'Simple data exported successfully!'
      ,
      'action.clear': '×',
      'action.clearFilters': 'Clear all filters',
      'action.removeTag': 'Remove tag',
      'action.edit': 'Edit',
      'action.delete': 'Delete',
      'action.copyLink': 'Copy Link',
      'action.backToParent': 'Back to Parent',
      'maintenance.nextDueTitle': 'When should this maintenance be performed next?'
      ,
      'word.yes': 'Yes',
      'word.no': 'No',
      'word.na': 'N/A'
      ,
      'export.header.type': 'Type',
      'export.header.id': 'ID',
      'export.header.name': 'Name',
      'export.header.manufacturer': 'Manufacturer',
      'export.header.modelNumber': 'Model Number',
      'export.header.serialNumber': 'Serial Number',
      'export.header.purchaseDate': 'Purchase Date',
      'export.header.purchasePrice': 'Purchase Price',
      'export.header.currency': 'Currency',
      'export.header.location': 'Location',
      'export.header.url': 'URL',
      'export.header.notes': 'Notes',
      'export.header.tags': 'Tags',
      'export.header.warrantyScope': 'Warranty Scope',
      'export.header.warrantyExpiration': 'Warranty Expiration',
      'export.header.warrantyLifetime': 'Warranty Lifetime',
      'export.header.secondaryWarrantyScope': 'Secondary Warranty Scope',
      'export.header.secondaryWarrantyExpiration': 'Secondary Warranty Expiration',
      'export.header.secondaryWarrantyLifetime': 'Secondary Warranty Lifetime',
      'export.header.maintenanceEvents': 'Maintenance Events',
      'export.header.photoPath': 'Photo Path',
      'export.header.receiptPath': 'Receipt Path',
      'export.header.manualPath': 'Manual Path',
      'export.header.parentId': 'Parent ID',
      'export.header.parentSubId': 'Parent Sub ID',
      'export.header.createdAt': 'Created At',
      'export.header.updatedAt': 'Updated At',
      'export.header.quantity': 'Quantity',
      'export.type.asset': 'Asset',
      'export.type.component': 'Component',
      'export.type.subcomponent': 'Sub-Component',
      'asset.details': 'Asset Details',
      'component.details': 'Component Details',
    },
    zh: {
      'app.title': (window.SITE_TITLE || 'DumbAssets'),
      'demo.mode': '🧪 演示模式（功能受限）',
      'home.aria': '转到仪表盘',
      'settings.aria': '设置',
      'theme.aria': '切换主题',
      'search.placeholder': '搜索资产...',
      'button.addAsset': '添加资产',
      'button.importAssets': '导入资产',
      'sub.addComponent': '+ 添加组件',
      'maintenance.addEvent': '添加维护事件',
      'file.photos.hint': '拖放或点击上传照片',
      'file.receipts.hint': '拖放或点击上传收据',
      'file.manuals.hint': '拖放或点击上传手册',
      'action.save': '保存',
      'action.cancel': '取消',
      'import.title': '导入资产',
      'settings.legend.events': '通知事件',
      'import.downloadTemplate': '下载模板',
      'import.startImport': '开始导入',
      'settings.title': '设置',
      'tab.notifications': '通知',
      'tab.interface': '界面',
      'tab.system': '系统',
      'pin.enter': '输入 PIN',
      'pin.incorrect': 'PIN 错误。请重试。',
      'credit.builtBy': '由 以下 构建',
      'addAsset.title': '添加资产',
      'editAsset.title': '编辑资产',
      'asset.name': '名称 *',
      'asset.manufacturer': '制造商',
      'asset.model': '型号',
      'asset.serial': '序列号',
      'asset.purchaseDate': '购买日期',
      'asset.price': '价格',
      'asset.quantity': '数量',
      'asset.warrantyScope': '保修范围',
      'asset.warrantyExpiration': '保修到期',
      'asset.lifetime': '终身',
      'asset.link': '链接',
      'asset.tags': '标签',
      'asset.notes': '备注',
      'maintenance.title': '维护事件',
      'file.attachments': '文件附件',
      'file.photo': '照片',
      'file.receipt': '收据',
      'file.manual': '手册',
      'import.acceptedTypes': '接受类型：.csv，.xls，.xlsx',
      'mapping.name': '名称：',
      'mapping.manufacturer': '制造商：',
      'mapping.model': '型号：',
      'mapping.serial': '序列号：',
      'mapping.purchaseDate': '购买日期：',
      'mapping.purchasePrice': '购买价格：',
      'mapping.quantity': '数量：',
      'mapping.notes': '备注：',
      'mapping.url': 'URL：',
      'mapping.warranty': '保修：',
      'mapping.warrantyExpiration': '保修到期：',
      'mapping.lifetime': '终身：',
      'mapping.secondaryWarranty': '第二保修范围：',
      'mapping.secondaryWarrantyExpiration': '第二保修到期：',
      'mapping.tags': '标签：',
      'warranty.addSecondary': '添加第二保修',
      'warranty.removeSecondary': '移除第二保修',
      'error.nameRequired': '名称是必填项。请重试。',
      'error.parentIdRequired': '父级 ID 是必填项。请重试。',
      'import.mapName': '请映射“名称”列',
      'import.rowNameRequired': '第 {row} 行：名称为必填。',
      'import.invalidDate': "第 {row} 行：列 '{col}' 中的日期无效 ({val})",
      'empty.noAssets': '未找到资产。添加你的第一个资产以开始。',
      'settings.legend.reorder': '重新排序区域',
      'settings.reorder.hint': '拖放以重新排序仪表板区域：',
      'dashboard.section.analytics': '分析',
      'dashboard.section.totals': '汇总',
      'dashboard.section.warranties': '保修',
      'dashboard.section.events': '事件',
      'dashboard.legend.warrantyMaintenance': '保修到期与维护',
      'toggle.showAnalytics': '显示分析',
      'toggle.showTotals': '显示汇总',
      'toggle.showWarranties': '显示保修',
      'toggle.showEvents': '显示事件',
      'card.totalAssets': '资产总数',
      'card.totalComponents': '组件总数',
      'card.totalValue': '总价值',
      'card.warrantiesTotal': '保修总数',
      'card.warrantiesWithin60': '60天内保修',
      'card.warrantiesWithin30': '30天内保修',
      'card.warrantiesExpired': '保修已过期',
      'card.warrantiesActive': '保修有效',
      'dashboard.analytics.warrantiesOverTime': '随时间到期的保修',
      'dashboard.analytics.warrantyStatus': '保修状态',
      'dashboard.analytics.upcomingMaintenanceEvents': '即将进行的维护事件',
      'asset.overview': '资产概览',
      'notify.assetAdded': '添加资产',
      'notify.assetDeleted': '删除资产',
      'notify.assetEdited': '编辑资产',
      'notify.1month': '1 个月',
      'notify.2weeks': '2 周',
      'notify.1week': '1 周',
      'notify.3days': '3 天',
      'notify.maintenance': '维护'
      ,
      'maintenance.recurring': '定期',
      'maintenance.oneTime': '一次性',
      'maintenance.eventLabel': '事件：',
      'maintenance.notesLabel': '备注：',
      'maintenance.schedule': '维护计划',
      'label.description': '描述',
      'meta.added': '添加于',
      'meta.updated': '更新于',
      'file.unknown': '未知文件',
      'asset.unnamed': '未命名资产',
      'asset.totalValue': '总价值'
      ,
      'file.uploadSummary': '{valid} 个有效 {type} 已添加。{invalid} 个文件无效或重复，已被跳过。',
      'file.invalidAll': '文件类型无效。请上传受支持的文件。',
      'file.invalidMultiple': '文件类型无效或存在重复文件。请上传受支持且不重复的文件。',
      'file.onlyOneAllowed': '只允许一个文件。已选择第一个有效文件。',
      'select.column': '选择列',
      'import.invalidType': '文件类型无效。请选择 {types} 文件。',
      'components.legend': '组件',
      'add.subcomponent': '+ 添加子组件',
      'editComponent.title': '编辑组件',
      'empty.noComponents': '未找到组件。添加你的第一个组件以开始。',
      'tags.placeholder': '添加标签（按回车或逗号添加）',
      'date.specific': '特定日期',
      'error.generic': '发生错误。请重试。',
      'asset.warrantyLabel': '保修',
      'asset.secondaryWarrantyLabel': '第二保修'
      ,
      'action.deleteImage': '删除图片',
      'action.deleteDocument': '删除 {type}',
      'confirm.deleteFile': '确定要删除此 {type} 吗？',
      'file.document': '文档'
      ,
      'asset.added': '资产已成功添加！',
      'asset.updated': '资产已成功更新！',
      'asset.deleted': '资产已成功删除！',
      'component.added': '组件已成功添加！',
      'component.updated': '组件已成功更新！',
      'component.deleted': '组件已成功删除！',
      'confirm.deleteAsset': '确定要删除此资产吗？这也将删除其所有组件。',
      'confirm.deleteComponent': '确定要删除此组件吗？这也将删除任何子组件。',
      'asset.linkCopied': '资产链接已复制到剪贴板！',
      'asset.copyFailed': '无法复制链接到剪贴板。请重试。',
      'import.success': '成功导入 {count} 个资产',
      'settings.saved': '设置已保存',
      'notifications.testSent': '测试通知已成功发送！',
      'export.success': '数据导出成功！',
      'export.simpleSuccess': '简单数据导出成功！'
      ,
      'action.clear': '×',
      'action.clearFilters': '清除所有筛选',
      'action.removeTag': '移除标签',
      'action.edit': '编辑',
      'action.delete': '删除',
      'action.copyLink': '复制链接',
      'action.backToParent': '返回到父项',
      'maintenance.nextDueTitle': '此维护下次应在何时执行？'
      ,
      'word.yes': '是',
      'word.no': '否',
      'word.na': 'N/A'
      ,
      'export.header.type': '类型',
      'export.header.id': 'ID',
      'export.header.name': '名称',
      'export.header.manufacturer': '制造商',
      'export.header.modelNumber': '型号',
      'export.header.serialNumber': '序列号',
      'export.header.purchaseDate': '购买日期',
      'export.header.purchasePrice': '购买价格',
      'export.header.currency': '货币',
      'export.header.location': '位置',
      'export.header.url': 'URL',
      'export.header.notes': '备注',
      'export.header.tags': '标签',
      'export.header.warrantyScope': '保修范围',
      'export.header.warrantyExpiration': '保修到期',
      'export.header.warrantyLifetime': '保修终身',
      'export.header.secondaryWarrantyScope': '第二保修范围',
      'export.header.secondaryWarrantyExpiration': '第二保修到期',
      'export.header.secondaryWarrantyLifetime': '第二保修终身',
      'export.header.maintenanceEvents': '维护事件',
      'export.header.photoPath': '照片路径',
      'export.header.receiptPath': '收据路径',
      'export.header.manualPath': '手册路径',
      'export.header.parentId': '父级 ID',
      'export.header.parentSubId': '父子 ID',
      'export.header.createdAt': '创建时间',
      'export.header.updatedAt': '更新时间',
      'export.header.quantity': '数量',
      'export.type.asset': '资产',
      'export.type.component': '组件',
      'export.type.subcomponent': '子组件',
      'asset.details': '资产详情',
      'component.details': '组件详情',
    }
  };

  function getSavedLang(){
    return localStorage.getItem('lang') || navigator.language.split('-')[0] || 'en';
  }

  function setLang(lang){
    localStorage.setItem('lang', lang);
    // Immediately translate current document
    translateDocument(lang);
    // Dispatch a global event so other modules can re-render if needed
    try{
      const ev = new CustomEvent('i18n:changed', { detail: { lang } });
      document.dispatchEvent(ev);
    }catch(e){}
    // Some parts of the app create DOM asynchronously; run follow-up translates
    // at multiple intervals to catch those elements (fixes timing issues where toggle
    // needs multiple clicks to take effect).
    setTimeout(() => translateDocument(lang), 50);
    setTimeout(() => translateDocument(lang), 100);
    setTimeout(() => translateDocument(lang), 200);
  }

  function t(key, lang){
    const l = lang || getSavedLang();
    return (translations[l] && translations[l][key]) || translations['en'][key] || key;
  }

  // Mapping of elements to translation keys and where to set the value
  const mapping = [
    {selector:'#pageTitle', type:'text', key:'app.title'},
    {selector:'#siteTitle', type:'text', key:'app.title'},
    {selector:'#demo-banner span', type:'text', key:'demo.mode'},
    {selector:'#homeBtn', type:'aria', attr:'aria-label', key:'home.aria', retryCount: 5},
    {selector:'#settingsBtn', type:'aria', attr:'aria-label', key:'settings.aria'},
    {selector:'#themeToggle', type:'aria', attr:'aria-label', key:'theme.aria'},
    {selector:'#searchInput', type:'placeholder', key:'search.placeholder'},
    {selector:'#addAssetBtn', type:'text', key:'button.addAsset'},
    {selector:'#importAssetsBtn', type:'text', key:'button.importAssets'},
    {selector:'#addSubAssetBtn', type:'text', key:'sub.addComponent'},
    {selector:'#addMaintenanceEvent', type:'text', key:'maintenance.addEvent'},
    {selector:'.file-upload-box[data-target="assetPhoto"] .upload-content span', type:'text', key:'file.photos.hint'},
    {selector:'.file-upload-box[data-target="assetReceipt"] .upload-content span', type:'text', key:'file.receipts.hint'},
    {selector:'.file-upload-box[data-target="assetManual"] .upload-content span', type:'text', key:'file.manuals.hint'},
    {selector:'.save-btn', type:'text', key:'action.save'},
    {selector:'.cancel-btn', type:'text', key:'action.cancel'},
    {selector:'#importAssetTitle', type:'text', key:'import.title'},
    {selector:'#downloadTemplateBtn', type:'text', key:'import.downloadTemplate'},
    {selector:'#startImportBtn', type:'text', key:'import.startImport'},
    {selector:'#settingsTitle', type:'text', key:'settings.title'},
    {selector:'button.tab-btn[data-tab="notifications"]', type:'text', key:'tab.notifications'},
    {selector:'button.tab-btn[data-tab="interface"]', type:'text', key:'tab.interface'},
    {selector:'button.tab-btn[data-tab="system"]', type:'text', key:'tab.system'},
    {selector:'h2', type:'text-first', key:'pin.enter'},
    {selector:'.pin-error', type:'text', key:'pin.incorrect'},
    {selector:'.dumbware-credit', type:'text-append', key:'credit.builtBy'}
  ];

  function translateDocument(lang){
    const l = lang || getSavedLang();
    try{
      document.documentElement.setAttribute('lang', l);
    }catch(e){}

    mapping.forEach(entry => {
      const el = document.querySelector(entry.selector);
      if (!el) return;
      const value = t(entry.key, l);
      switch(entry.type){
        case 'text':
          el.textContent = value;
          break;
        case 'text-first':
          // Use only for the first matching element of that selector
          el.textContent = value;
          break;
        case 'text-append':
          el.innerHTML = '';
          const span = document.createElement('span');
          span.textContent = value + ' ';
          el.appendChild(span);
          // keep existing credit link if present
          const link = el.querySelector('a');
          if (link) el.appendChild(link);
          break;
        case 'placeholder':
          el.setAttribute('placeholder', value);
          break;
        case 'aria':
          el.setAttribute(entry.attr || 'aria-label', value);
          break;
        default:
          el.textContent = value;
      }
    });

    // Translate all elements with aria-label attributes more robustly
    // This ensures buttons like homeBtn get their aria-labels updated
    const ariaElements = document.querySelectorAll('[aria-label]');
    ariaElements.forEach(el => {
      const currentLabel = el.getAttribute('aria-label');
      // Map common aria-labels to translation keys
      const ariaLabelMap = {
        'Go to Dashboard': 'home.aria',
        'Settings': 'settings.aria',
        'Toggle theme': 'theme.aria',
        'Toggle asset list': 'toggle.showAssets'
      };
      
      const key = ariaLabelMap[currentLabel];
      if (key) {
        const translatedValue = t(key, l);
        el.setAttribute('aria-label', translatedValue);
      }
    });

    // Also translate any elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const val = t(key, l);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
        if (el.placeholder) el.placeholder = val;
        else el.value = val;
      } else {
        el.textContent = val;
      }
    });

    // Translate title attributes for elements using data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (!key) return;
      const val = t(key, l);
      try{ el.setAttribute('title', val); }catch(e){}
    });

    // Auto-translate any legend titles with class .dashboard-legend-title
    // This covers legends generated dynamically without explicit data-i18n attributes
    const legendMap = {
      'Totals': 'dashboard.section.totals',
      'Warranties': 'dashboard.section.warranties',
      'Analytics': 'dashboard.section.analytics',
      'Events': 'dashboard.section.events',
      'Components': 'components.legend',
      'Asset Overview': 'asset.overview',
      'Asset Details': 'asset.details',
      'Component Details': 'component.details'
    };
    document.querySelectorAll('.dashboard-legend-title').forEach(el => {
      const current = (el.textContent || '').trim();
      const key = legendMap[current];
      if (key) el.textContent = t(key, l);
    });

    // Auto-translate chart titles and other dynamic h3 elements in dashboard
    const chartTitleMap = {
      'Warranty Status': 'dashboard.analytics.warrantyStatus',
      'Warranties Expiring Over Time': 'dashboard.analytics.warrantiesOverTime',
      'Upcoming Maintenance Events': 'dashboard.analytics.upcomingMaintenanceEvents'
    };
    document.querySelectorAll('.chart-container h3').forEach(el => {
      const current = (el.textContent || '').trim();
      const key = chartTitleMap[current];
      if (key) el.textContent = t(key, l);
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    // ensure SITE_TITLE from config.js reflected
    if (window.SITE_TITLE) {
      translations.en['app.title'] = window.SITE_TITLE;
      translations.zh['app.title'] = window.SITE_TITLE;
    }
    const lang = getSavedLang();
    translateDocument(lang);

    // wire language selector if present
    const sel = document.getElementById('languageSelect');
    if (sel){
      sel.value = lang;
      sel.addEventListener('change', (e)=>{
        setLang(e.target.value);
      });
    }
  });

  window.i18n = { t, setLang, getSavedLang, translateDocument };
})();

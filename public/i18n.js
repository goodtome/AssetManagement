// Lightweight i18n utility for DumbAssets
(function () {
  const translations = {
    en: {
      'app.title': window.SITE_TITLE || 'DumbAssets',
      'demo.mode': 'DEMO MODE (limited functionality)',
      'language.label': 'Language',
      'language.option.en': 'English',
      'language.option.zh': 'Chinese',
      'home.aria': 'Go to Dashboard',
      'settings.aria': 'Settings',
      'theme.aria': 'Toggle theme',
      'sidebar.aria': 'Toggle asset list',
      'search.placeholder': 'Search assets...',
      'button.addAsset': 'Add Asset',
      'button.importAssets': 'Import Assets',
      'button.save': 'Save',
      'button.cancel': 'Cancel',
      'button.test': 'Test',
      'button.exportAllCsv': 'Export All Data CSV',
      'button.exportSimpleCsv': 'Export Simple CSV',
      'button.addSubComponent': '+ Add Sub-Component',
      'sub.addComponent': '+ Add Component',
      'add.subcomponent': '+ Add Sub-Component',
      'maintenance.addEvent': 'Add Maintenance Event',
      'file.photos.hint': 'Drag & drop or click to upload photos',
      'file.receipts.hint': 'Drag & drop or click to upload receipts',
      'file.manuals.hint': 'Drag & drop or click to upload manuals',
      'action.save': 'Save',
      'action.cancel': 'Cancel',
      'action.test': 'Test',
      'action.clear': 'x',
      'action.clearFilters': 'Clear all filters',
      'action.removeTag': 'Remove tag',
      'action.edit': 'Edit',
      'action.delete': 'Delete',
      'action.copyLink': 'Copy Link',
      'action.backToParent': 'Back to Parent',
      'action.deleteImage': 'Delete Image',
      'action.deleteDocument': 'Delete {type}',
      'import.title': 'Import Assets',
      'import.columnMapping': 'Column Mapping',
      'import.downloadTemplate': 'Download Template',
      'import.startImport': 'Start Import',
      'import.acceptedTypes': 'Accepted types: .csv, .xls, .xlsx',
      'import.invalidType': 'Invalid file type. Please select a {types} file.',
      'import.mapName': 'Please map the Name column',
      'import.rowNameRequired': 'Row {row}: Name is required.',
      'import.invalidDate': "Row {row}: Invalid date in column '{col}' ({val})",
      'import.noDataRows': 'No data rows found in file.',
      'import.readFailed': 'Failed to read file:',
      'import.validationError': 'Invalid file format or content',
      'import.validationFailed': 'Validation error:',
      'import.failed': 'Import failed:',
      'import.success': 'Successfully imported {count} assets',
      'settings.title': 'Settings',
      'settings.saved': 'Settings saved',
      'settings.title.notifications': 'Notifications',
      'settings.title.interface': 'Interface',
      'settings.title.system': 'System',
      'settings.legend.events': 'Notification Events',
      'settings.legend.reorder': 'Reorder Sections',
      'settings.legend.toggleSections': 'Toggle Sections',
      'settings.legend.toggleCards': 'Toggle Cards',
      'settings.legend.export': 'Data Export',
      'settings.reorder.hint': 'Drag and drop to reorder dashboard sections:',
      'tab.notifications': 'Notifications',
      'tab.interface': 'Interface',
      'tab.system': 'System',
      'pin.enter': 'Enter PIN',
      'pin.incorrect': 'Incorrect PIN. Please try again.',
      'pin.remainingAttempts': 'Incorrect PIN. {count} attempts remaining.',
      'pin.lastAttempt': 'Incorrect PIN. Last attempt before lockout.',
      'credit.builtBy': 'Built by',
      'addAsset.title': 'Add Asset',
      'editAsset.title': 'Edit Asset',
      'editComponent.title': 'Edit Component',
      'asset.name': 'Name *',
      'asset.manufacturer': 'Manufacturer',
      'asset.model': 'Model Number',
      'asset.serial': 'Serial Number',
      'asset.purchaseDate': 'Purchase Date',
      'asset.price': 'Price',
      'asset.quantity': 'Quantity',
      'asset.totalValue': 'Total Value',
      'asset.warrantyScope': 'Warranty Scope',
      'asset.warrantyExpiration': 'Warranty Expiration',
      'asset.lifetime': 'Lifetime',
      'asset.link': 'Link',
      'asset.tags': 'Tags',
      'asset.notes': 'Notes',
      'asset.overview': 'Asset Overview',
      'asset.details': 'Asset Details',
      'asset.warrantyLabel': 'Warranty',
      'asset.secondaryWarrantyLabel': 'Secondary Warranty',
      'asset.unnamed': 'Unnamed Asset',
      'asset.unknownParent': 'Unknown Parent',
      'component.details': 'Component Details',
      'components.legend': 'Components',
      'file.attachments': 'File Attachments',
      'file.photo': 'Photo',
      'file.receipt': 'Receipt',
      'file.manual': 'Manual',
      'file.document': 'Document',
      'file.unknown': 'Unknown File',
      'file.uploadSummary': '{valid} valid {type} added. {invalid} file(s) were invalid or duplicate and were skipped.',
      'file.invalidAll': 'Invalid file type. Please upload a supported file.',
      'file.invalidMultiple': 'Invalid file type(s) or duplicate files. Please upload supported, non-duplicate files.',
      'file.onlyOneAllowed': 'Only one file allowed. The first valid file was selected.',
      'confirm.deleteFile': 'Are you sure you want to delete this {type}?',
      'confirm.deleteAsset': 'Are you sure you want to delete this asset? This will also delete all its components.',
      'confirm.deleteComponent': 'Are you sure you want to delete this component? This will also delete any sub-components.',
      'empty.noAssets': 'No assets found. Add your first asset to get started.',
      'empty.noComponents': 'No components found. Add your first component.',
      'empty.noEvents': 'No events found',
      'tags.placeholder': 'Add tags (press enter or comma to add)',
      'label.description': 'Description',
      'meta.added': 'Added',
      'meta.updated': 'Updated',
      'word.yes': 'Yes',
      'word.no': 'No',
      'word.na': 'N/A',
      'word.file': 'file',
      'word.files': 'files',
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
      'mapping.tags': 'Tags:',
      'warranty.addSecondary': 'Add Secondary Warranty',
      'warranty.removeSecondary': 'Remove Secondary Warranty',
      'maintenance.title': 'Maintenance Events',
      'maintenance.recurring': 'Recurring',
      'maintenance.oneTime': 'One-time',
      'maintenance.eventLabel': 'Event',
      'maintenance.eventName': 'Event Name',
      'maintenance.notesLabel': 'Notes:',
      'maintenance.notesPlaceholder': 'Notes (optional)',
      'maintenance.schedule': 'Maintenance Schedule',
      'maintenance.nextDueDate': 'Next Due Date:',
      'maintenance.nextDueTitle': 'When should this maintenance be performed next?',
      'maintenance.frequency': 'Frequency',
      'maintenance.every': 'Every {frequency} {unit}',
      'maintenance.next': 'Next: {date}',
      'maintenance.date': 'Date: {date}',
      'maintenance.type': 'Maintenance',
      'maintenance.deleteEvent': 'Delete event',
      'notifications.testSent': 'Test notifications sent successfully!',
      'notify.assetAdded': 'Asset Added',
      'notify.assetDeleted': 'Asset Deleted',
      'notify.assetEdited': 'Asset Edited',
      'notify.1month': '1 Month',
      'notify.2weeks': '2 Weeks',
      'notify.1week': '1 Week',
      'notify.3days': '3 Days',
      'notify.maintenance': 'Maintenance',
      'dashboard.section.analytics': 'Analytics',
      'dashboard.section.totals': 'Totals',
      'dashboard.section.warranties': 'Warranties',
      'dashboard.section.events': 'Events',
      'dashboard.legend.warrantyMaintenance': 'Warranty Expirations & Maintenance',
      'dashboard.analytics.warrantiesOverTime': 'Warranties Expiring Over Time',
      'dashboard.analytics.warrantyStatus': 'Warranty Status',
      'dashboard.analytics.upcomingMaintenanceEvents': 'Upcoming Maintenance Events',
      'dashboard.filter.all': 'All',
      'dashboard.filter.warranty': 'Warranty',
      'dashboard.filter.maintenance': 'Maintenance',
      'dashboard.range.allFuture': 'All Future',
      'dashboard.range.1month': '1 Month',
      'dashboard.range.3months': '3 Months',
      'dashboard.range.6months': '6 Months',
      'dashboard.range.1year': '1 Year',
      'dashboard.range.12months': '12 Months',
      'dashboard.range.past': 'Past Events',
      'dashboard.range.specific': 'Specific Date',
      'dashboard.card.assets': 'Assets',
      'dashboard.card.components': 'Components',
      'dashboard.card.value': 'Value',
      'dashboard.card.total': 'Total',
      'dashboard.card.within60': 'In 60 days',
      'dashboard.card.within30': 'In 30 days',
      'dashboard.card.expired': 'Expired',
      'dashboard.card.active': 'Active',
      'dashboard.event.warrantyExpiration': 'Warranty Expiration',
      'dashboard.event.secondaryWarrantyExpiration': 'Secondary Warranty Expiration',
      'dashboard.event.parent': 'Parent: {name}',
      'dashboard.event.days': '{count} days',
      'dashboard.event.daysPast': '{count} days past',
      'dashboard.pagination.summary': 'Showing {start}-{end} of {total} events',
      'dashboard.pagination.previous': 'Previous',
      'dashboard.pagination.next': 'Next',
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
      'sort.ab': 'Ab',
      'select.column': 'Select Column',
      'date.specific': 'Specific Date',
      'date.past': 'Past',
      'error.generic': 'An error occurred. Please try again.',
      'error.nameRequired': 'Name is required. Please try again.',
      'error.parentIdRequired': 'Parent ID is required. Please try again.',
      'asset.added': 'Asset added successfully!',
      'asset.updated': 'Asset updated successfully!',
      'asset.deleted': 'Asset deleted successfully!',
      'asset.notFound': 'Asset not found',
      'component.added': 'Component added successfully!',
      'component.updated': 'Component updated successfully!',
      'component.deleted': 'Component deleted successfully!',
      'component.notFound': 'Component not found',
      'asset.linkCopied': 'Asset link copied to clipboard!',
      'asset.copyFailed': 'Failed to copy link to clipboard. Please try again.',
      'export.success': 'Data exported successfully!',
      'export.simpleSuccess': 'Simple data exported successfully!',
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
      'time.day': 'day',
      'time.days': 'days',
      'time.week': 'week',
      'time.weeks': 'weeks',
      'time.month': 'month',
      'time.months': 'months',
      'time.year': 'year',
      'time.years': 'years',
      'chart.label.expired': 'Expired',
      'chart.label.expiring30': 'Expiring in 30 days',
      'chart.label.expiring60': 'Expiring in 60 days',
      'chart.label.active': 'Active',
      'chart.label.warrantiesExpiring': 'Warranties Expiring',
      'chart.label.upcomingMaintenance': 'Upcoming Maintenance',
      'chart.tooltip.warrantyCount': '{count} warranties expiring',
      'chart.tooltip.maintenanceCount': '{count} maintenance events'
    },
    zh: {
      'app.title': window.SITE_TITLE || 'DumbAssets',
      'demo.mode': '演示模式（功能受限）',
      'language.label': '语言',
      'language.option.en': 'English',
      'language.option.zh': '中文',
      'home.aria': '前往仪表盘',
      'settings.aria': '设置',
      'theme.aria': '切换主题',
      'sidebar.aria': '切换资产列表',
      'search.placeholder': '搜索资产...',
      'button.addAsset': '添加资产',
      'button.importAssets': '导入资产',
      'button.save': '保存',
      'button.cancel': '取消',
      'button.test': '测试',
      'button.exportAllCsv': '导出全部 CSV',
      'button.exportSimpleCsv': '导出简化 CSV',
      'button.addSubComponent': '+ 添加子组件',
      'sub.addComponent': '+ 添加组件',
      'add.subcomponent': '+ 添加子组件',
      'maintenance.addEvent': '添加维护事件',
      'file.photos.hint': '拖放或点击上传照片',
      'file.receipts.hint': '拖放或点击上传收据',
      'file.manuals.hint': '拖放或点击上传手册',
      'action.save': '保存',
      'action.cancel': '取消',
      'action.test': '测试',
      'action.clear': 'x',
      'action.clearFilters': '清除所有筛选',
      'action.removeTag': '移除标签',
      'action.edit': '编辑',
      'action.delete': '删除',
      'action.copyLink': '复制链接',
      'action.backToParent': '返回父级',
      'action.deleteImage': '删除图片',
      'action.deleteDocument': '删除{type}',
      'import.title': '导入资产',
      'import.columnMapping': '列映射',
      'import.downloadTemplate': '下载模板',
      'import.startImport': '开始导入',
      'import.acceptedTypes': '支持类型：.csv、.xls、.xlsx',
      'import.invalidType': '文件类型无效。请选择 {types} 文件。',
      'import.mapName': '请映射“名称”列',
      'import.rowNameRequired': '第 {row} 行：名称为必填项。',
      'import.invalidDate': "第 {row} 行：列 '{col}' 中的日期无效（{val}）",
      'import.noDataRows': '文件中未找到数据行。',
      'import.readFailed': '读取文件失败：',
      'import.validationError': '文件格式或内容无效',
      'import.validationFailed': '校验失败：',
      'import.failed': '导入失败：',
      'import.success': '成功导入 {count} 个资产',
      'settings.title': '设置',
      'settings.saved': '设置已保存',
      'settings.title.notifications': '通知',
      'settings.title.interface': '界面',
      'settings.title.system': '系统',
      'settings.legend.events': '通知事件',
      'settings.legend.reorder': '调整区域顺序',
      'settings.legend.toggleSections': '显示区域',
      'settings.legend.toggleCards': '显示卡片',
      'settings.legend.export': '数据导出',
      'settings.reorder.hint': '拖放以调整仪表盘区域顺序：',
      'tab.notifications': '通知',
      'tab.interface': '界面',
      'tab.system': '系统',
      'pin.enter': '输入 PIN',
      'pin.incorrect': 'PIN 错误，请重试。',
      'pin.remainingAttempts': 'PIN 错误，还剩 {count} 次尝试机会。',
      'pin.lastAttempt': 'PIN 错误，再错一次将被锁定。',
      'credit.builtBy': '开发者',
      'addAsset.title': '添加资产',
      'editAsset.title': '编辑资产',
      'editComponent.title': '编辑组件',
      'asset.name': '名称 *',
      'asset.manufacturer': '制造商',
      'asset.model': '型号',
      'asset.serial': '序列号',
      'asset.purchaseDate': '购买日期',
      'asset.price': '价格',
      'asset.quantity': '数量',
      'asset.totalValue': '总价值',
      'asset.warrantyScope': '保修范围',
      'asset.warrantyExpiration': '保修到期',
      'asset.lifetime': '终身',
      'asset.link': '链接',
      'asset.tags': '标签',
      'asset.notes': '备注',
      'asset.overview': '资产概览',
      'asset.details': '资产详情',
      'asset.warrantyLabel': '保修',
      'asset.secondaryWarrantyLabel': '第二保修',
      'asset.unnamed': '未命名资产',
      'asset.unknownParent': '未知父级',
      'component.details': '组件详情',
      'components.legend': '组件',
      'file.attachments': '文件附件',
      'file.photo': '照片',
      'file.receipt': '收据',
      'file.manual': '手册',
      'file.document': '文档',
      'file.unknown': '未知文件',
      'file.uploadSummary': '已添加 {valid} 个有效{type}，{invalid} 个文件无效、重复或已跳过。',
      'file.invalidAll': '文件类型无效，请上传受支持的文件。',
      'file.invalidMultiple': '存在无效或重复文件，请上传受支持且不重复的文件。',
      'file.onlyOneAllowed': '只允许上传一个文件，已选择第一个有效文件。',
      'confirm.deleteFile': '确定要删除此{type}吗？',
      'confirm.deleteAsset': '确定要删除此资产吗？这也会删除它的所有组件。',
      'confirm.deleteComponent': '确定要删除此组件吗？这也会删除它的所有子组件。',
      'empty.noAssets': '未找到资产。添加你的第一个资产开始使用。',
      'empty.noComponents': '未找到组件。添加你的第一个组件。',
      'empty.noEvents': '未找到事件',
      'tags.placeholder': '添加标签（按回车或逗号添加）',
      'label.description': '描述',
      'meta.added': '添加于',
      'meta.updated': '更新于',
      'word.yes': '是',
      'word.no': '否',
      'word.na': '无',
      'word.file': '文件',
      'word.files': '文件',
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
      'maintenance.title': '维护事件',
      'maintenance.recurring': '周期性',
      'maintenance.oneTime': '一次性',
      'maintenance.eventLabel': '事件',
      'maintenance.eventName': '事件名称',
      'maintenance.notesLabel': '备注：',
      'maintenance.notesPlaceholder': '备注（可选）',
      'maintenance.schedule': '维护计划',
      'maintenance.nextDueDate': '下次到期：',
      'maintenance.nextDueTitle': '这项维护应在何时再次执行？',
      'maintenance.frequency': '频率',
      'maintenance.every': '每 {frequency} {unit}',
      'maintenance.next': '下次：{date}',
      'maintenance.date': '日期：{date}',
      'maintenance.type': '维护',
      'maintenance.deleteEvent': '删除事件',
      'notifications.testSent': '测试通知已成功发送！',
      'notify.assetAdded': '资产已添加',
      'notify.assetDeleted': '资产已删除',
      'notify.assetEdited': '资产已编辑',
      'notify.1month': '1 个月',
      'notify.2weeks': '2 周',
      'notify.1week': '1 周',
      'notify.3days': '3 天',
      'notify.maintenance': '维护',
      'dashboard.section.analytics': '分析',
      'dashboard.section.totals': '汇总',
      'dashboard.section.warranties': '保修',
      'dashboard.section.events': '事件',
      'dashboard.legend.warrantyMaintenance': '保修到期与维护',
      'dashboard.analytics.warrantiesOverTime': '保修到期趋势',
      'dashboard.analytics.warrantyStatus': '保修状态',
      'dashboard.analytics.upcomingMaintenanceEvents': '即将到来的维护事件',
      'dashboard.filter.all': '全部',
      'dashboard.filter.warranty': '保修',
      'dashboard.filter.maintenance': '维护',
      'dashboard.range.allFuture': '全部未来事件',
      'dashboard.range.1month': '1 个月',
      'dashboard.range.3months': '3 个月',
      'dashboard.range.6months': '6 个月',
      'dashboard.range.1year': '1 年',
      'dashboard.range.12months': '12 个月',
      'dashboard.range.past': '过去事件',
      'dashboard.range.specific': '指定日期',
      'dashboard.card.assets': '资产',
      'dashboard.card.components': '组件',
      'dashboard.card.value': '价值',
      'dashboard.card.total': '总计',
      'dashboard.card.within60': '60 天内',
      'dashboard.card.within30': '30 天内',
      'dashboard.card.expired': '已过期',
      'dashboard.card.active': '有效',
      'dashboard.event.warrantyExpiration': '保修到期',
      'dashboard.event.secondaryWarrantyExpiration': '第二保修到期',
      'dashboard.event.parent': '父级：{name}',
      'dashboard.event.days': '{count} 天',
      'dashboard.event.daysPast': '已过 {count} 天',
      'dashboard.pagination.summary': '显示第 {start}-{end} 条，共 {total} 条事件',
      'dashboard.pagination.previous': '上一页',
      'dashboard.pagination.next': '下一页',
      'toggle.showAnalytics': '显示分析',
      'toggle.showTotals': '显示汇总',
      'toggle.showWarranties': '显示保修',
      'toggle.showEvents': '显示事件',
      'card.totalAssets': '资产总数',
      'card.totalComponents': '组件总数',
      'card.totalValue': '总价值',
      'card.warrantiesTotal': '保修总数',
      'card.warrantiesWithin60': '60 天内保修',
      'card.warrantiesWithin30': '30 天内保修',
      'card.warrantiesExpired': '已过期保修',
      'card.warrantiesActive': '有效保修',
      'sort.ab': '字母',
      'select.column': '选择列',
      'date.specific': '指定日期',
      'date.past': '过去',
      'error.generic': '发生错误，请重试。',
      'error.nameRequired': '名称为必填项，请重试。',
      'error.parentIdRequired': '父级 ID 为必填项，请重试。',
      'asset.added': '资产添加成功！',
      'asset.updated': '资产更新成功！',
      'asset.deleted': '资产删除成功！',
      'asset.notFound': '未找到资产',
      'component.added': '组件添加成功！',
      'component.updated': '组件更新成功！',
      'component.deleted': '组件删除成功！',
      'component.notFound': '未找到组件',
      'asset.linkCopied': '资产链接已复制到剪贴板！',
      'asset.copyFailed': '复制资产链接失败，请重试。',
      'export.success': '数据导出成功！',
      'export.simpleSuccess': '简化数据导出成功！',
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
      'export.header.warrantyLifetime': '终身保修',
      'export.header.secondaryWarrantyScope': '第二保修范围',
      'export.header.secondaryWarrantyExpiration': '第二保修到期',
      'export.header.secondaryWarrantyLifetime': '第二终身保修',
      'export.header.maintenanceEvents': '维护事件',
      'export.header.photoPath': '照片路径',
      'export.header.receiptPath': '收据路径',
      'export.header.manualPath': '手册路径',
      'export.header.parentId': '父级 ID',
      'export.header.parentSubId': '父级子组件 ID',
      'export.header.createdAt': '创建时间',
      'export.header.updatedAt': '更新时间',
      'export.header.quantity': '数量',
      'export.type.asset': '资产',
      'export.type.component': '组件',
      'export.type.subcomponent': '子组件',
      'time.day': '天',
      'time.days': '天',
      'time.week': '周',
      'time.weeks': '周',
      'time.month': '个月',
      'time.months': '个月',
      'time.year': '年',
      'time.years': '年',
      'chart.label.expired': '已过期',
      'chart.label.expiring30': '30 天内到期',
      'chart.label.expiring60': '60 天内到期',
      'chart.label.active': '有效',
      'chart.label.warrantiesExpiring': '即将到期的保修',
      'chart.label.upcomingMaintenance': '即将到来的维护',
      'chart.tooltip.warrantyCount': '{count} 个保修即将到期',
      'chart.tooltip.maintenanceCount': '{count} 个维护事件'
    }
  };

  function getSavedLang() {
    const saved = localStorage.getItem('lang');
    if (saved && translations[saved]) return saved;
    const browserLang = (navigator.language || 'en').split('-')[0];
    return translations[browserLang] ? browserLang : 'en';
  }

  function replaceParams(value, params = {}) {
    return String(value).replace(/\{(\w+)\}/g, (_, key) => {
      return Object.prototype.hasOwnProperty.call(params, key) ? params[key] : `{${key}}`;
    });
  }

  function t(key, lang) {
    const locale = lang || getSavedLang();
    return (translations[locale] && translations[locale][key]) || translations.en[key] || key;
  }

  function format(key, params = {}, lang) {
    return replaceParams(t(key, lang), params);
  }

  function setNodeText(el, value) {
    const textNodes = Array.from(el.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);
    if (textNodes.length > 0) {
      textNodes[0].textContent = value;
      for (let i = 1; i < textNodes.length; i++) {
        textNodes[i].textContent = '';
      }
      return;
    }
    el.insertBefore(document.createTextNode(value), el.firstChild);
  }

  function applyTranslation(el, value, attrType) {
    if (attrType === 'placeholder') {
      el.setAttribute('placeholder', value);
      return;
    }
    if (attrType === 'title') {
      el.setAttribute('title', value);
      return;
    }
    if (attrType === 'aria-label') {
      el.setAttribute('aria-label', value);
      return;
    }
    if (el.classList.contains('dumbware-credit')) {
      const link = el.querySelector('a');
      el.innerHTML = '';
      const span = document.createElement('span');
      span.textContent = `${value} `;
      el.appendChild(span);
      if (link) el.appendChild(link);
      return;
    }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', value);
      } else {
        el.value = value;
      }
      return;
    }
    setNodeText(el, value);
  }

  function translateDocument(lang) {
    const locale = lang || getSavedLang();
    document.documentElement.setAttribute('lang', locale);

    const enOption = document.querySelector('#languageSelect option[value="en"]');
    if (enOption) enOption.textContent = t('language.option.en', locale);
    const zhOption = document.querySelector('#languageSelect option[value="zh"]');
    if (zhOption) zhOption.textContent = t('language.option.zh', locale);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      applyTranslation(el, t(key, locale));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      applyTranslation(el, t(key, locale), 'placeholder');
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (!key) return;
      applyTranslation(el, t(key, locale), 'title');
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (!key) return;
      applyTranslation(el, t(key, locale), 'aria-label');
    });
  }

  function setLang(lang) {
    const locale = translations[lang] ? lang : 'en';
    localStorage.setItem('lang', locale);
    translateDocument(locale);
    try {
      document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang: locale } }));
    } catch (error) {
      console.error('Failed to dispatch i18n change event', error);
    }
    setTimeout(() => translateDocument(locale), 50);
    setTimeout(() => translateDocument(locale), 100);
    setTimeout(() => translateDocument(locale), 200);
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (window.SITE_TITLE) {
      translations.en['app.title'] = window.SITE_TITLE;
      translations.zh['app.title'] = window.SITE_TITLE;
    }

    const lang = getSavedLang();
    translateDocument(lang);

    const selector = document.getElementById('languageSelect');
    if (selector) {
      selector.value = lang;
      selector.addEventListener('change', (event) => {
        setLang(event.target.value);
      });
    }
  });

  window.i18n = {
    t,
    format,
    setLang,
    getSavedLang,
    translateDocument
  };
})();

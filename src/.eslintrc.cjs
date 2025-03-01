module.exports = {
  extends: [
    // ...existing extends
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { 
        allowConstantExport: true,
        allowExportNames: ['buttonVariants', 'badgeVariants', 'toggleVariants', 'navigationMenuTriggerStyle']
      }
    ],
  },
  overrides: [
    {
      files: ['src/lib/variants/**/*.ts'],
      rules: {
        'react-refresh/only-export-components': 'off'
      }
    }
  ]
};

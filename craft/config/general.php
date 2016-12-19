<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
	'*' => array(
		// general options
		'defaultWeekStartDay' => 1,
		'sendPoweredByHeader' => false,
		// urls
		'addTrailingSlashesToUrls' => true,
		'omitScriptNameInUrls' => true,
		'defaultCpLanguage' => 'en_ie',
		// user options
		'useEmailAsUsername' => true,
	    // template options
		'errorTemplatePrefix' => '_errors/',
		'environmentVariables' => array(
			'baseAssetsUrl' => '//'.strtolower($_SERVER['SERVER_NAME']).'/assets/',
			'baseAssetsPath' => realpath(dirname(__FILE__)).'/../../html/assets/',
			'baseUploadsUrl' => '//'.strtolower($_SERVER['SERVER_NAME']).'/uploads/',
			'baseUploadsPath' => realpath(dirname(__FILE__)).'/../../html/uploads/',
		),
	),
    '.local' => array(
	    'appId' => 'development',
	    'siteUrl' => 'http://www.delaneymethod.local',
	    'devMode' => true,
	    'translationDebugOutput' => false,
	    'useCompressedJs' => false,
        // caching options
		'enableTemplateCaching' => false,
       // user options
		'testToEmailAddress' => 'hello@delaneymethod.com',
	),
    '.com' => array(
	    'appId' => 'production',
	    'siteUrl' => 'http://www.delaneymethod.com',
	    'useCompressedJs' => true,
        'cooldownDuration' => 0,
        // updates
		'allowAutoUpdates' => false,
		'backupDbOnUpdate' => false,
    	'restoreDbOnUpdateFailure' => false,
    	// security options
		'enableCsrfProtection' => true,
		'validationKey' => 'BCCDEE2B724DD98F1E61FE08936A570FFF30C146BC20FB2B044DB37DBA12E664',
		// caching
		// 'cacheMethod' => 'file',
		// assets
		'imageDriver' => 'imagick',
    ),
);

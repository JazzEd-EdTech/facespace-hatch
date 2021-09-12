<?php
/**
 * @copyright Copyright (c) 2017 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Comments;


use OCP\IServerContainer;

class JSSettingsHelper {
	/** @var IServerContainer */
	private $c;

	public function __construct(IServerContainer $c) {
		$this->c = $c;
	}

	public function extend(array $settings) {
		$appConfig = json_decode($settings['array']['oc_appconfig'], true);

		$value = (int)$this->c->getConfig()->getAppValue('comments', 'maxAutoCompleteResults', 10);
		$appConfig['comments']['maxAutoCompleteResults'] = $value;

		$settings['array']['oc_appconfig'] = json_encode($appConfig);
	}
}

// Copyright (c) 2003-2016, One Network Enterprises, Inc. All rights reserved.

package test;

import java.util.*;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;

import dao.DBCollectionFactory;

/**
 * TODO complete the class documentation
 *
 */
public class Init {

  static DBCollection pageConllection;

  @BeforeClass
  public static void init() {
    pageConllection = DBCollectionFactory.getPageDBCollection();
  }

  @Test
  public void testAdd() {
    BasicDBObject page1 = new BasicDBObject();
    page1.append("pageName", "createStudentPage");
    page1.append("objType", "student");
    page1.append("title", "create student");
    List<Map<String, Object>> pageConfigs = new ArrayList<Map<String, Object>>();
    Map<String, Object> name = createElement("text", "name", "name", true, "student.name");
    Map<String, Object> age = createElement("number", "age", "age", true, "student.age");
    Map<String, Object> major = createElement("text", "major", "major", true, "student.major");
    pageConfigs.add(name);
    pageConfigs.add(age);
    pageConfigs.add(major);
    page1.append("fields", pageConfigs);
    pageConllection.insert(page1);
  }

  private Map<String, Object> createElement(
    String type,
    String label,
    String placeholder,
    boolean required,
    String ngModel) {
    Map<String, Object> element = new HashMap<String, Object>();
    element.put("type", type);
    element.put("label", label);
    element.put("placeholder", placeholder);
    element.put("required", required);
    element.put("model", ngModel);
    return element;
  }

  @AfterClass
  public static void destory() {
    DBCollectionFactory.getMongoClient().close();
  }
}
